from django.urls import path
from . import views

urlpatterns = [
    path('username/', views.username, name='username'),
    path('tweet/', views.tweet, name='tweet'),
    path('keywords/', views.keywords, name='keywords')
]