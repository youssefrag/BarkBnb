from rest_framework import serializers
from sittings.models import Sitting, Dog, Offer
from users.models import Profile
from django.contrib.auth.models import User

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class DogSerializer(serializers.ModelSerializer):
    owner = ProfileSerializer(many=False)
    class Meta:
        model = Dog
        fields = '__all__'   

class SittingSerializer(serializers.ModelSerializer):
    dog = DogSerializer(many=False)

    class Meta:
        model = Sitting
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class OfferSerializer(serializers.ModelSerializer):
    sitting = SittingSerializer(many=False)
    sitter = ProfileSerializer(many=False)
    class Meta:
        model = Offer
        fields = '__all__'