from django.urls import path
from .views import ArticleData,ShopItemData,CartItemData,SalesOrderData

urlpatterns = [
    path("article/", ArticleData.as_view(), name="article_data"),
    path("shop-items/", ShopItemData.as_view(), name="shop_item_data"),
    path("cart-items/", CartItemData.as_view(), name="cart_item_data"),
    path("sales-order/", SalesOrderData.as_view(), name="sales_order")
]
