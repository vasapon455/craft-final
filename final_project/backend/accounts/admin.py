from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser 
from .forms import CustomUserChangeForm, CustomUserCreationForm


class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        print("Available fields:", form.base_fields)
        return form

admin.site.register(CustomUser)
