from django.db import models
from django.contrib.auth.models import User

class Article(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='article/', default="/shopping/item-example.jpg")
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="article")

    def __str__(self):
        return self.title
    
class Comment(models.Model):
    comment_text = models.CharField(max_length=100)
    commented_post = models.ForeignKey(Article, on_delete=models.CASCADE, related_name='post_comments')
    is_approved = models.BooleanField()
    date_created = models.DateTimeField(auto_now_add=True)    
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="comment")
    
    def __str__(self):
        return self.comment_text

class ShopItem(models.Model):
    image = models.ImageField(upload_to='shop-item/', default="/shopping/item-example.jpg")
    item_name= models.CharField(max_length="100")
    price = models.IntegerField()
    quantity = models.IntegerField()

class CartItem(models.Model):
    image = models.ForeignKey(ShopItem, on_delete=models.CASCADE, related_name="cart_image")
    item_name = models.ForeignKey(ShopItem, on_delete=models.CASCADE, related_name="cart_item_name")
    price = models.ForeignKey(ShopItem, on_delete=models.CASCADE, related_name="cart_item_price")
    quantity = models.IntegerField()
    customer =  models.ForeignKey(User, on_delete=models.CASCADE, related_name="customer")

class SalesOrder(models.Model):
    image = models.ForeignKey(ShopItem, on_delete=models.CASCADE, related_name="item_image")
    item_name = models.ForeignKey(ShopItem, on_delete=models.CASCADE, related_name="item_name")
    price = models.ForeignKey(ShopItem, on_delete=models.CASCADE, related_name="item_price")
    quantity = models.IntegerField()
    customer =  models.ForeignKey(User, on_delete=models.CASCADE, related_name="customer")
