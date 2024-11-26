from django.urls import path
from .views import BlogListView, BlogDetailView, \
    BlogCreateView, BlogUpdateView, BlogDeleteView,CommentCreateView,CommentUpdateView,CommentDeleteView

from .views import blogCreateView,commentCreateView

urlpatterns = [
    path('', BlogListView.as_view(), name='home'),
    path('post/<int:pk>/', BlogDetailView.as_view(), name='post_detail'),
    path('post/new/', BlogCreateView.as_view(),  name='post_new'),
    #path('post/new/', blogCreateView, name='post_new'),
    path('post/<int:pk>/edit/', BlogUpdateView.as_view(), name='post_edit'),
    path('post/<int:pk>/delete/', BlogDeleteView.as_view(), name='post_delete'),
    path('post/<int:pk>/new-comment/', CommentCreateView.as_view(), name='comment_new'),
    path('post/<int:pk>/edit-comment/', CommentUpdateView.as_view(), name='comment_edit'),
    path('post/<int:pk>/delete-comment/', CommentDeleteView.as_view(), name='comment_delete')
]
