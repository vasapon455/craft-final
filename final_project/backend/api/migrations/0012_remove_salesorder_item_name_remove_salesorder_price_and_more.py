# Generated by Django 5.1.3 on 2024-12-01 10:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_rename_title_shopitem_item_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='salesorder',
            name='item_name',
        ),
        migrations.RemoveField(
            model_name='salesorder',
            name='price',
        ),
        migrations.RemoveField(
            model_name='salesorder',
            name='quantity',
        ),
    ]
