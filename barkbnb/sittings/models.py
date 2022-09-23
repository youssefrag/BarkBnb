from django.db import models
from enum import unique
from django.db.models.deletion import CASCADE
from users.models import Profile

from datetime import datetime

from django.utils.timezone import now

import uuid

class Dog(models.Model):
    owner = models.ForeignKey(
        Profile, null=True, blank=True, on_delete=CASCADE)
    name = models.CharField(max_length=200)
    SIZE_CHOICES = (
        ('S', 'Small'),
        ('M', 'Medium'),
        ('L', 'Large'),
    )
    size = models.CharField(max_length=200, choices=SIZE_CHOICES)
    dog_image = models.ImageField(
        null=True, blank=True,
        upload_to='dogs/', default="dogs/default-dog.jpeg"
    )
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)

    def __str__(self):
        return self.name


class Sitting(models.Model):
    dog = models.ForeignKey(
        Dog, on_delete=CASCADE)
    CITY_CHOICES = (
        ('MTL', 'Montreal, Quebec'),
        ('TOR', 'Toronto, Ontario'),
        ('VAN', 'Vancouver, British Columbia'),
        ('CAL', 'Calgary, Alberta'),
        ('OTT', 'Ottawa, Ontario'),
    )
    location = models.CharField(max_length=200, choices=CITY_CHOICES)
    sitter = models.ForeignKey(
        Profile, null=True, blank=True, on_delete=CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    created = models.DateTimeField(default=now)
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)

    def __str__(self):
        return f'{self.dog.size} dog named {self.dog} from {self.start_date} to {self.end_date} in {self.location}'


class Offer(models.Model):
    sitter = models.ForeignKey(Profile, on_delete=CASCADE)
    sitting = models.ForeignKey(Sitting, on_delete=CASCADE)
    price = models.IntegerField()
    accepted = models.BooleanField(default=False)
    created = models.DateTimeField(default=now)
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)

    def __str__(self):
        return self.sitting
