from django.urls import path
from . import views

app_name = 'industries'

urlpatterns = [
    path('', views.industries, name='industries'),
    path('aerospace/', views.aero, name='aerospace'),
    path('automotive/', views.auto, name='automotive'),
    path('banking/', views.bank, name='banking'),
    path('education/', views.education, name='education'),
    path('health/', views.health, name='health'),
    path('manufacturing/', views.manufact, name='manufacturing'),
    path('retail/', views.retail, name='retail'),
    path('telecom/', views.tele, name='telecom'),
    
]
