"""
URL configuration for techsolglobal project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(('index.urls', 'index'), namespace = 'index' )),
    path('about/', include(('aboutus.urls', 'aboutus'), namespace = 'aboutus' )),
    path('services/', include(('services.urls', 'services'), namespace = 'services' )),
    path('careers/', include(('careers.urls', 'careers'), namespace = 'careers' )),
    path('industries/', include(('industries.urls', 'industries'), namespace = 'industries' )),
    path('contact/', include(('contactus.urls', 'contact'), namespace = 'contact' )),
]
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)