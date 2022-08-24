from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializers import SittingSerializer
from sittings.models import Sitting

@api_view(['GET'])
def getRoutes(request):

    routes = [
        {
            'Endpoint': '/sittings/',
            'method': 'GET',
            'body': None,
            'description':' Get all available sittings'
        }
    ]

    return Response(routes)

@api_view(['GET'])
def getSittings(request):
    sittings = Sitting.objects.all()
    serializer = SittingSerializer(sittings, many=True)
    return Response(serializer.data)