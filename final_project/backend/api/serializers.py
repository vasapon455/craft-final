from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Blog

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)\
        password = validated_data.pop('password')
        user = User.objects.create_user(**validated_data)
        return user

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ["id","title","content","created_at","author"]
        extra_kwrags = {"author":{"read_only": True}}
