from django.shortcuts import render,reverse
from django.conf import settings
from django.core.mail import send_mail
from .models import Article,ShopItem,CartItem,SalesOrder,CustomUser,Comment
from rest_framework import generics,status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import UserSerializer,ArticleSerializer,ShopItemSerializer,CartItemSerializer,SalesOrderSerializer,CommentSerializer

class CreateUserView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class ArticleDetailDelete(generics.RetrieveDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = [IsAuthenticated]
    

    def get_queryset(self):
        user = self.request.user
        return Article.objects.filter(author=user)


class ArticleListCreate (generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Article.objects.filter(author=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)

class ArticleUpdate (generics.UpdateAPIView):
      queryset = Article.objects.all()
      serializer_class = ArticleSerializer
      permission_classes = [IsAuthenticated]


class CommentListCreate(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Comment.objects.filter(author=user)
    
    def perform_create(self, serializer):
        commented_post_id = self.request.data.get('commented_post')
        serializer.save(author=self.request.user,commented_post_id=commented_post_id)
        return Response({"message": "Commented Sent"}, status=status.HTTP_201_CREATED)

class CommentDetailDelete(generics.RetrieveDestroyAPIView):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Comment.objects.filter(author=user)

class CommentUpdate(generics.UpdateAPIView):
      queryset = Comment.objects.all()
      serializer_class = CommentSerializer
      permission_classes = [IsAuthenticated]


class ShopItemData (generics.ListAPIView):
    queryset = ShopItem.objects.all()
    serializer_class = ShopItemSerializer
    permission_classes = [AllowAny]


class ShopItemDetailDelete (generics.RetrieveDestroyAPIView):
    queryset = ShopItem.objects.all()
    serializer_class = ShopItemSerializer
    permission_classes = [AllowAny]

class CartItemListCreate (generics.ListCreateAPIView):
    queryset = CartItem.objects.all()
    serializer_class = CartItemSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        item = self.request.data.get('customer')
        serializer.save(customer=self.request.user)
        return Response({"message": "Cart Item Added"}, status=status.HTTP_201_CREATED)

class SalesOrderData (generics.ListCreateAPIView):
    queryset = SalesOrder.objects.all()
    serializer_class = SalesOrderSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        user = self.request.user
        return SalesOrder.objects.filter(customer=user)

    def perform_create(self, serializer):
        user = self.request.user
        serializer.save(customer=user)
        return Response({"message": "Order Added"}, status=status.HTTP_201_CREATED)
