from django.contrib import admin
from .models import Article,Comment,ShopItem,CartItem,SalesOrder,CustomUser

# Register your models here.
admin.site.register(CustomUser)
admin.site.register(Article)
admin.site.register(Comment)
admin.site.register(ShopItem)
admin.site.register(CartItem)
admin.site.register(SalesOrder)