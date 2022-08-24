from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def getRoutes(request):

    routes = [
        {
            'Endpoint': '/sittings/',
            'method': 'POST',
            'body': None,
            'description':' Get all available sittings'
        }
    ]

    return Response(routes)