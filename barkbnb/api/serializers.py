from rest_framework import serializers
from sittings.models import Sitting, Dog
from users.models import Profile

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