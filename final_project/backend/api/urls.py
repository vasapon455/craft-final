from django.urls import path
from .views import ArticleListCreate,ShopItemData,CartItemListCreate,CartItemDelete,SalesOrderListCreate,CartItemUpdate,ArticleDetailDelete,ArticleUpdate,CommentUpdate,CommentListCreate,CommentDetailDelete,ShopItemDetailDelete
urlpatterns = [
    path("article/", ArticleListCreate.as_view(), name="article_data"),
    path("article/<int:pk>/", ArticleDetailDelete.as_view(), name="article_delete"),
    path("article/<int:pk>/update", ArticleUpdate.as_view(), name="article_update"),
    path("article/comment/", CommentListCreate.as_view(), name="comment_data"),
    path("article/comment/<int:pk>/", CommentDetailDelete.as_view(), name="comment_detail"),
    path("article/comment/<int:pk>/update/", CommentUpdate.as_view(), name="comment_update"),
    path("shop-items/", ShopItemData.as_view(), name="shop_item_data"),
    path("shop-items/<int:pk>", ShopItemDetailDelete.as_view(), name="shop_item_data"),
    path("cart-items/", CartItemListCreate.as_view(), name="cart_item_data"),
    path("cart-items/<int:pk>", CartItemDelete.as_view(), name="cart_item_delete"),
    path("cart-items/<int:pk>/update", CartItemUpdate.as_view(), name="cart_item_update"),
    path("order/", SalesOrderListCreate.as_view(), name="sales_order")
]
