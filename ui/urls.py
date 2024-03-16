"""
URL configuration for nlp-suite-ui project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
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

from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('contact', views.contact, name='contact'),
    path('home', views.home, name='home'),
    path('install', views.install, name='install'),
    path('g_n1', views.g_n1, name='g_n1'),
    path('g_n2', views.g_n2, name='g_n2'),
    path('g_n3', views.g_n3, name='g_n3'),
    path('g_n4', views.g_n4, name='g_n4'),
    path('g_n5', views.g_n5, name='g_n5'),
    path('g_n6', views.g_n6, name='g_n6'),
    path('g_n7', views.g_n7, name='g_n7'),
    path('g_n8', views.g_n8, name='g_n8'),
    path('g_n9', views.g_n9, name='g_n9'),
    path('g_n10', views.g_n10, name='g_n10'),
    path('g_n11', views.g_n11, name='g_n11'),
    path('g_n12', views.g_n12, name='g_n12'),
    path('set_up', views.set_up, name='set_up'),
    path('all_options_gui', views.all_options_gui, name='all_options_gui'),
]

