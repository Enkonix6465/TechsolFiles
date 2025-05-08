from django.urls import path
from . import views

app_name = 'services'

urlpatterns = [
    path('', views.services, name='services'),
    path('application_development/', views.appdev, name='application_development'),
    path('cloud/', views.cloud, name='cloud'),
    path('cognitive_operations/', views.cogop, name='cognitive_operations'),
    path('data_analytics/', views.data, name='data_analytics'),
    path('it_advisory/', views.itadvise, name='it_advisory'),
    path('network_solutions/', views.net, name='network_solutions'),
    path('software_training/', views.soft, name='software_training'),
    
]
