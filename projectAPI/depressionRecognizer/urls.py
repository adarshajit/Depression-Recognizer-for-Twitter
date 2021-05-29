from django.urls import path
from . import views

urlpatterns = [
    path('', views.analyseDepression, name='analyseDepression')
]