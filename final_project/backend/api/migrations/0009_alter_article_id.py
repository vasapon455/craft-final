# Generated by Django 5.1.3 on 2024-12-01 03:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_alter_article_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
