from django.contrib import admin
from modules.models import Module, Lesson
from rango.models import Category, Page, UserProfile

# Register your models here.
admin.site.register(Module)
admin.site.register(Lesson)
admin.site.register(UserProfile)