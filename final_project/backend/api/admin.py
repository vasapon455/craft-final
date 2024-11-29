from django.contrib import admin
from .models import Article,Comment,ShopItem,CartItem,SalesOrder

# Register your models here.
admin.site.register(Article,Comment,ShopItem,CartItem,SalesOrder)