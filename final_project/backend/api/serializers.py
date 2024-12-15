
from rest_framework import serializers
from .models import Article,ShopItem,Comment,CartItem,SalesOrder,CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        user = CustomUser.objects.create_user(**validated_data)
        return user
  
class ArticleSerializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField()
    class Meta:
        model = Article
        fields = ["id","title","content","image","created_at","author"]
        extra_kwrags = {"author":{"read_only": True}}
        

class CommentSerializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField()
    commented_post = serializers.StringRelatedField()
    class Meta:
        model = Comment
        fields=["id","comment_text","commented_post","is_approved","date_created","author"]
        extra_kwrags = {"author":{"read_only": True}}

class ShopItemSerializer(serializers.ModelSerializer):
    item_name = serializers.StringRelatedField()
    class Meta:
        model = ShopItem
        fields = ["id","category", "image","item_name","price","quantity"]
        extra_kwrags = {"item_name":{"read_only": True}}

   
class CartItemSerializer(serializers.ModelSerializer):
    customer = serializers.StringRelatedField()
    class Meta:
        model = CartItem
        fields = ["id","item","quantity","customer"]
        extra_kwrags = {"customer":{"read_only": True}}
    
class SalesOrderSerializer(serializers.ModelSerializer):
    customer = serializers.StringRelatedField()
    class Meta: 
        model = SalesOrder
        fields = ["id","item","quantity","customer","status"]
        extra_kwrags = {"customer":{"read_only": True}}
