from django.shortcuts import render,reverse
from django.contrib.auth.models import User
from .models import Article
from rest_framework import generics
from .serializers import UserSerializer,ArticleSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class ArticleData (generics.ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = [AllowAny]

class ShopItemData (generics.ListAPIVIew):
    queryset = Article.objects.all()
    serializer_class = ShopItemSerializer
    permission_classes = [AllowAny]
