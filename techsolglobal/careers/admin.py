from django.contrib import admin
from .models import Job, Application

# Register your models here.
@admin.register(Job)
class JobAdmin(admin.ModelAdmin):
    list_display = ('title', 'location', 'created_at')
    search_fields = ('title', 'location')
    ordering = ('-created_at',)
    
@admin.register(Application)
class ApplicationAdmin(admin.ModelAdmin):
    list_display = ('fullname', 'email', 'phone', 'role', 'applied_at')
    list_filter = ('role', 'applied_at')
    search_fields = ('fullname', 'email', 'role')