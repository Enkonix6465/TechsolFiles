from django.urls import path
from . import views

app_name = 'index'

urlpatterns = [
    path('', views.index, name='index'),
    path('mission/', views.mission, name='mission'),
    path('vision/', views.vision, name='vision'),
    path('values/', views.values, name='values'),
   
]
