# Generated by Django 5.1.3 on 2024-12-01 08:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_alter_article_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='shopitem',
            old_name='item_name',
            new_name='title',
        ),
    ]
