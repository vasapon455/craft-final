from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class CustomUser(AbstractUser):
    id = models.AutoField(primary_key=True)
    address = models.CharField(max_length=1000)

class Article(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='article/', default="/shopping/item-example.jpg", blank=False, null=False)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="article")

    def __str__(self):
        return self.title
    
    def author_full_name(self):
        return self.author.get_full_name()
    author_full_name.short_description = 'Full Name' 


class Comment(models.Model):
    id = models.AutoField(primary_key=True)
    comment_text = models.CharField(max_length=100)
    commented_post = models.ForeignKey(Article, on_delete=models.CASCADE, related_name='post_comments')
    is_approved = models.BooleanField(default=True)
    date_created = models.DateTimeField(auto_now_add=True)    
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="comment")
   
    def __str__(self):
        return self.comment_text
    
    def author_full_name(self):
        return self.author.get_full_name()
    author_full_name.short_description = 'Full Name' 

    def commented_post_full_name(self):
        return self.commented.get_full_name()
    commented_post_full_name.short_description = 'Comment'

class ShopItem(models.Model):
    id = models.AutoField(primary_key=True)
    image = models.ImageField(upload_to='shop-item/', default="/shopping/item-example.jpg")
    category = models.CharField(max_length=50)
    item_name= models.CharField(max_length=100)
    price = models.IntegerField()
    quantity = models.IntegerField()

    def __str__(self):
        return self.item_name
    
class CartItem(models.Model):
    id = models.AutoField(primary_key=True)
    item = models.ForeignKey(ShopItem, on_delete=models.CASCADE, related_name="cart_item_name")
    quantity = models.IntegerField()
    customer =  models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="customer_cart")

    def __str__(self):
        return self.item_name

class SalesOrder(models.Model):
    id = models.AutoField(primary_key=True)
    customer =  models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="customer_order")
