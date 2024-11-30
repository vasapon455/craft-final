from django.urls import path
from .views import ArticleData,ShopItemData,CartItemData,SalesOrderData,ArticleDelete,ArticleCreate,CommentListCreate,CommentDelete
urlpatterns = [
    path("article/", ArticleData.as_view(), name="article_data"),
    path("article/new", ArticleCreate.as_view(),name="article_new"),
    path("article/delete/<int:pk>/", ArticleDelete.as_view(), name="article_delete"),
    path("article/comment/", CommentListCreate.as_view(), name="comment_data"),
     path("article/comment/delete/<int:pk>", CommentDelete.as_view(), name="comment_delete"),
    path("shop-items/", ShopItemData.as_view(), name="shop_item_data"),
    path("cart-items/", CartItemData.as_view(), name="cart_item_data"),
    path("sales-order/", SalesOrderData.as_view(), name="sales_order")
]
