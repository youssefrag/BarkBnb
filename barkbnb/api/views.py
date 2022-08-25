from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
import os
from django.conf import settings

from rest_framework.parsers import MultiPartParser, FormParser

from users.models import Profile
from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate, logout

from .serializers import SittingSerializer, ProfileSerializer, UserSerializer
from sittings.models import Sitting

from django.core.files.storage import default_storage
from django.core.files.base import ContentFile

from rest_framework import status

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

@api_view(['POST'])
def registerUser(request):
    data = request.data
    try:
        user = User.objects.create(
            first_name=data['name'],
            username=data['username'],
            email=data['email'],
            password=data['password']
        )

        serializer = UserSerializer(user, many=False)

        login(request, user)

        return Response(serializer.data)
    except:
        message = {'detail': 'User with this email already exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def logoutUser(request):
    logout(request)
    return Response()

@api_view(['POST'])
def editAccount(request, email):

    profile = Profile.objects.get(email=email)

    serializer = ProfileSerializer(data=request.data, instance=profile)
    if serializer.is_valid():
        print(request.data)
        serializer.save()
        return Response(serializer.data)
