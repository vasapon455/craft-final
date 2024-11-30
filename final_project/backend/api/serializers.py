from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Article,ShopItem,Comment,CartItem,SalesOrder,CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        password = validated_data.pop('password')
        user = CustomUser.objects.create_user(**validated_data)
        return user
  

class ArticleSerializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField()
    class Meta:
        model = Article
        fields = ["id", "image","title","content","created_at","author"]
        extra_kwrags = {"author":{"read_only": True}}

class CommentSerializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField()
    class Meta:
        model = Comment
        fields=["id","comment_text","commented_post","is_approved","date_created","author"]
        extra_kwrags = {"author":{"read_only": True}}

class ShopItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopItem
        fields = ["id", "image","item_name","price","quantity"]
   
class CartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        fields = ["id", "image","item_name","price","quantity","customer"]
        extra_kwrags = {"customer":{"read_only": True}}

class SalesOrderSerializer(serializers.ModelSerializer):
    class Meta: 
        model = SalesOrder
        fields = ["id", "image","item_name","price","quantity","customer"]
        extra_kwrags = {"customer":{"read_only": True}}