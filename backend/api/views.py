from django.shortcuts import render
from django.http import JsonResponse

def getRoutes(request):
    routes = [
        {'GET':'api/users'},
        {'GET':'api/users/id'},
        {'POST':'api/users/id'},

        {'GET':'api/sittings'},
        {'GET':'api/sittings/id'},
        {'POST':'api/sittings/id'},
    ]