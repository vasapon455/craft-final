from django.urls import path
from .views import ArticleData

urlpatterns = [
    path("article/", ArticleData.as_view(), name="data"),
]
