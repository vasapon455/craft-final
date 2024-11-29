from django.db import models
from django.contrib.auth.models import User,AbstractUser

class CustomUser(AbstractUser):
    id = models.AutoField(primary_key=True)
    address = models.CharField(max_length=1000)
    email = models.EmailField(unique=True)

class Token(models.Model):
    id = models.AutoField(primary_key=True)
    token = models.CharField(max_length=255)
    created_at = models.DateTimeField()
    expires_at = models.DateTimeField()
    user_id = models.IntegerField()
    is_used = models.BooleanField(default=False)


class Article(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='article/', default="/shopping/item-example.jpg")
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="article")
    def __str__(self):
        return self.title
    
class Comment(models.Model):
    id = models.AutoField(primary_key=True)
    comment_text = models.CharField(max_length=100)
    commented_post = models.ForeignKey(Article, on_delete=models.CASCADE, related_name='post_comments')
    is_approved = models.BooleanField()
    date_created = models.DateTimeField(auto_now_add=True)    
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="comment")
    
    def __str__(self):
        return self.comment_text

class ShopItem(models.Model):
    id = models.AutoField(primary_key=True)
    image = models.ImageField(upload_to='shop-item/', default="/shopping/item-example.jpg")
    category = models.CharField(max_length="50")
    item_name= models.CharField(max_length="100")
    price = models.IntegerField()
    quantity = models.IntegerField()

class CartItem(models.Model):
    id = models.AutoField(primary_key=True)
    item = models.ForeignKey(ShopItem, on_delete=models.CASCADE, related_name="cart_item_name")
    quantity = models.IntegerField()
    customer =  models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="customer")

class SalesOrder(models.Model):
    id = models.AutoField(primary_key=True)
    item_name = models.ForeignKey(ShopItem, on_delete=models.CASCADE, related_name="item_name")
    quantity = models.IntegerField()
    price = models.IntegerField()
    customer =  models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="customer")
