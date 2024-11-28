from django.shortcuts import render,reverse
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer
from rest_framework_permissions import IsAuthenticated, AllowAny

class CreateUserView(generics.CreateAPIView):
    query_set = User.objects.all()
    serailizer_class =UserSerializer
    permission_classes = [AllowAny]


def listArticle(request):
    return render(request,'home.html')

def viewArticle1(request):
    ra = session_add(request, 'Article1', reverse('article1'))
    return render(request,'article1.html',{'ra':ra})

def viewArticle2(request):
    ra = session_add(request, 'Article2', reverse('article2'))
    return render(request,'article2.html',{'ra':ra})

def viewArticle3(request):
    ra = session_add(request, 'Article3', reverse('article3'))
    return render(request,'article3.html',{'ra':ra})

def viewArticle4(request):
    ra = session_add(request, 'Article4', reverse('article4'))
    return render(request,'article4.html',{'ra':ra})

def viewArticle5(request):
    ra = session_add(request, 'Article5', reverse('article5'))
    return render(request,'article5.html',{'ra':ra})

def session_add(request,title,url):
    if 'ra' in request.session:
        ra = request.session['ra']
    else:
        ra={}
    if title not in ra:
        ra[title] = url

    request.session['ra'] = ra
    
    return ra

