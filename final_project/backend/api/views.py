from django.shortcuts import render,reverse
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from .models import Article,ShopItem,CartItem,SalesOrder,CustomUser,Comment
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.view import APIView
from .serializers import UserSerializer,ArticleSerializer,ShopItemSerializer,CartItemSerializer,SalesOrderSerializer,CommentSerializer




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
