from django.shortcuts import render,reverse
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.conf import settings
from django.core.mail import send_mail
from .models import Article,ShopItem,CartItem,SalesOrder,CustomUser,Comment
from rest_framework import generics,status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.view import APIView
from .serializers import UserSerializer,ArticleSerializer,ShopItemSerializer,CartItemSerializer,SalesOrderSerializer,CommentSerializer,TokenSerializer


class UserCreateView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class LoginView(APIView):
   def post(self, request, format=None):
        username = request.data["username"]
        password = request.data["password"]
        hashed_password = make_password(password=password, salt=SALT)
        user = CustomUser.objects.get(username=username)
        if user is None or user.password != hashed_password:
            return Response(
                {
                    "success": False,
                    "message": "User Not Found",
                },
                status=status.HTTP_200_OK,
            )
        else:
            return Response(
                {"success": True, "message": "You are now logged in!"},
                status=status.HTTP_200_OK,
            )

class ForgotPasswordView(APIView):
    def post(self, request, format=None):
        username = request.data["username"]
        user = CustomUser.objects.get(username=username)
        created_at = timezone.now()
        expires_at = timezone.now() + timezone.timedelta(1)
        salt = uuid.uuid4().hex
        token = hashlib.sha512(
            (str(user.id) + user.password + created_at.isoformat() + salt).encode(
                "utf-8"
            )
        ).hexdigest()
        token_obj = {
            "token": token,
            "created_at": created_at,
            "expires_at": expires_at,
            "user_id": user.id,
        }
        serializer = TokenSerializer(data=token_obj)
        if  serializer.is_valid():
            serializer.save()
            subject = "Forgot Password Link"
            content = mail_template(
                "We have received a request to reset your password. Please reset your password using the link below.",
                f"{URL}/resetPassword?id={user.id}&token={token}",
                "Reset Password",
            )
            send_mail(
                subject=subject,
                message=content,
                from_email=settings.EMAIL_HOST_USER,
                recipient_list=[email],
                html_message=content,
            )
            return Response(
                {
                    "success": True,
                    "message": "A password reset link has been sent to your email.",
                },
                status=status.HTTP_200_OK,
            )
        else:
            error_msg = ""
            for key in serializer.errors:
                error_msg += serializer.errors[key][0]
            return Response(
                {
                    "success": False,
                    "message": error_msg,
                },
                status=status.HTTP_200_OK,
            )


class LogoutView(APIView):
     permission_classes = (IsAuthenticated,)
     def post(self, request):
          try:
               refresh_token = request.data["refresh_token"]
               token = RefreshToken(refresh_token)
               token.blacklist()
               return Response(status=status.HTTP_205_RESET_CONTENT)
          except Exception as e:
               return Response(status=status.HTTP_400_BAD_REQUEST)

class EditUserView( LoginRequiredMixin, UserPassesTestMixin, generics.RetrieveUpdateAPIView):
    def retrieve(self, request, *args, **kwargs):
        serializer = self.serializer_class(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def update(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)



class ArticleCreate(LoginRequiredMixin,generics.ListCreateAPIView):
    serializer_class = ArticleSerializer
    permission_classes = [IsAuthenticated]

    def perfrom_create(self,serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)


class ArticleDelete(LoginRequiredMixin,UserPassesTestMixin, generics.DestroyAPIView):
    serializer_class = ArticleSerializer
    permission_classes = [IsAuthenticated]


class ArticleData (generics.ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = [AllowAny]

class CommentData (generics.ListAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def perfrom_create(self,serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)

class ShopItemData (generics.ListAPIView):
    queryset = ShopItem.objects.all()
    serializer_class = ShopItemSerializer
    permission_classes = [AllowAny]

class CartItemData (generics.ListAPIView):
    queryset = CartItem.objects.all()
    serializer_class = CartItemSerializer
    permission_classes = [AllowAny]

class SalesOrderData (generics.ListAPIView):
    queryset = SalesOrder.objects.all()
    serializer_class = SalesOrderSerializer
    permission_classes = [AllowAny]
