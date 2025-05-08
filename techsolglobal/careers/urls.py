from django.urls import path
from . import views

app_name = 'careers'

urlpatterns = [
    path('', views.career, name='career'),
    path('apply/', views.apply, name='apply'),

]
