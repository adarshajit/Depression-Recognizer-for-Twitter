from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.

@api_view(('GET',))
def analyseDepression(request):
    res = {"message":"Hello World!"}
    return Response(res)