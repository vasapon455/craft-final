from django.shortcuts import render
from django.views.generic import ListView, DetailView, \
    CreateView, UpdateView, DeleteView
from .models import Post,Comment
from django.urls import reverse_lazy
from .models import PostForm,CommentForm  # Import your custom PostForm

class BlogListView(ListView):
    model = Post
    template_name = 'home.html'
    #queryset = Post.objects.filter(title__contains="1")  
    #context_object_name = 'all_posts_list' # new

class BlogDetailView(DetailView):
    model = Post
    template_name = 'post_detail.html'

class BlogCreateView(CreateView):
    model = Post
    template_name = 'post_new.html'
    form_class = PostForm  # Use your custom PostForm
    #fields = ['title','author','body']

class BlogUpdateView(UpdateView):
    model = Post
    template_name = 'post_edit.html'
    fields = ['title','body']

class BlogDeleteView(DeleteView):
    model = Post
    template_name = "post_delete.html"
    success_url = reverse_lazy('home')
    
class CommentCreateView(CreateView):
    model = Comment
    template_name = 'comment_new.html'
    form_class = CommentForm
    
class CommentDeleteView(DeleteView):
    model = Comment
    template_name = "comment_delete.html"
    success_url = reverse_lazy('home')

class CommentUpdateView(UpdateView):
    model = Comment
    template_name = 'comment_edit.html'
    fields = ['comment_text','user_rating']
    

from django.shortcuts import render, redirect
from .models import PostForm,CommentForm  # Importing the PostForm from models.py

# View function to create a new post
def blogCreateView(request):
    # Check if the request is a POST request (i.e., the form has been submitted)
    if request.method == 'POST':
        form = PostForm(request.POST)  # Create a form instance with the submitted data
        if form.is_valid():  # Check if the form data passes all validation rules
            form.save()  # Save the valid form data to create a new Post instance in the database
            return redirect('home')  # Redirect to the 'home' view after successful post creation
    else:
        form = PostForm()  # If the request is GET, create an empty form instance
    
    # Render the template with the form (either blank or filled with POST data)
    return render(request, 'post_new.html', {'form': form})

def commentCreateView(request):
    if request.method == 'POST':
        form = CommentForm(request.POST)
        if form.is_valid():  
            form.save() 
    else:
        form = CommentForm() 