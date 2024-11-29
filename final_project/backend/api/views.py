from django.shortcuts import render,reverse
from django.contrib.auth.models import User
from .models import Article,ShopItem,CartItem,SalesOrder
from rest_framework import generics
from .serializers import UserSerializer,ArticleSerializer,ShopItemSerializer,CartItemSerializer,SalesOrderSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class ArticleData (generics.ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = [AllowAny]

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
