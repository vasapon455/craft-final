# Generated by Django 5.1.3 on 2024-12-01 11:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_remove_salesorder_item_name_remove_salesorder_price_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='image',
            field=models.ImageField(default='/shop_item/blank.png', upload_to='article/'),
        ),
    ]