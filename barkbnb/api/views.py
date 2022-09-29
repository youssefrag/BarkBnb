from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
import os
from django.conf import settings

from users.forms import ProfileForm

from sittings.forms import DogForm, SittingForm

from rest_framework.parsers import MultiPartParser, FormParser

from users.models import Profile
from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate, logout

from .serializers import SittingSerializer, ProfileSerializer, UserSerializer, DogSerializer
from sittings.models import Sitting, Dog, Offer

from django.core.files.storage import default_storage
from django.core.files.base import ContentFile

from django.views.decorators.csrf import csrf_exempt

from rest_framework import status

from datetime import datetime

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

@api_view(['POST'])
def loginUser(request):
    data = request.data
    if request.method == 'POST':
        email = data['email']
        password = data['password']

        try:
            user = User.objects.get(email=email)
            print('user before authentication', user)
        except:
            message = {'detail': 'email does not match a user'}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)

    username = user.username.lower()

    if password == user.password:
        login(request, user)
        serializer = UserSerializer(user, many=False)
        message = {'detail': 'user has been logged in'}
        return Response(serializer.data)
    else:
        message = {'detail': 'Username or password is incorrect'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


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
        message = {'detail': 'An error has occured during registration'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def logoutUser(request):
    logout(request)
    return Response()


@api_view(['POST'])
def editAccount(request, email):

    profile = Profile.objects.get(email=email)

    profile.profile_image.save(request.FILES['profile_image'].name, request.FILES['profile_image'])

    form = ProfileForm(instance=profile)

    if request.method == 'POST':
        form = ProfileForm(data=request.data, instance=profile)
        form.save()

        return Response()

@api_view(['GET'])
def getProfiles(request):
    profiles = Profile.objects.all()
    serializer = ProfileSerializer(profiles, many=True)
    return Response(serializer.data)
    


@api_view(['GET'])
def getSittings(request):
    sittings = Sitting.objects.all()
    serializer = SittingSerializer(sittings, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getDogs(request, email):
    owner = Profile.objects.get(email=email)
    dogs = Dog.objects.filter(owner=owner)
    serializer = DogSerializer(dogs, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def createDogProfile(request, email):
    data = request.data 
    owner = Profile.objects.get(email=email)
    try:
        dog = Dog.objects.create(
            name=data['name'],
            size=data['size'],
            owner=owner
        )
        dog.dog_image.save(request.FILES['dog_image'].name, request.FILES['dog_image'])

        form = DogForm(instance=dog)

        if request.method == 'POST':
            form = ProfileForm(data=request.data, instance=dog)
            form.save()

            return Response()

    except:
        message = {'detail': 'An error has occured during dog profile creation'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def createSitting(request, dogName):
    data = request.data 
    dog = Dog.objects.get(name=dogName)

    start_date_string = data['startDate'][0:-14]
    start_date_object = datetime.strptime(start_date_string, '%Y-%m-%d').date()

    end_date_string = data['endDate'][0:-14]
    end_date_object = datetime.strptime(end_date_string, '%Y-%m-%d').date()

    

    newData = {'dog': dog, 'location': data['city']['value'], 'start_date': start_date_object, 'end_date': end_date_object}

    try:
        sitting = Sitting.objects.create(
            dog=dog,
            location=data['city']['value'],
            start_date=start_date_object,
            end_date=end_date_object,
        )

        form = SittingForm(instance=sitting)


        if request.method == 'POST':
            form = SittingForm(data=newData, instance=sitting)
            form.save()

            return Response()

    except:
        message = {'detail': 'An error has occured during sitting creation'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def makeOffer(request, userEmail):
    data = request.data
    print(data)

    sitter = Profile.objects.get(email=userEmail)
    print(sitter)

    sitting_id = data['id']
    sitting = Sitting.objects.get(id= sitting_id)
    print(sitting)

    try:
        offer = Offer.objects.create(
            sitter = sitter,
            sitting = sitting,
            price = data['price']
        )

        return Response()

    except:
        message = {'detail': 'An error has occured during offer creation'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)
