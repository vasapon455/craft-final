from django.urls import path
from .views import UserCreateView
urlpatterns = [
  path('register/', UserCreateView.as_view(), name='register'),
  path('change_user/<int:pk>/', ChangeView.as_view(), name='change_user'),
]
