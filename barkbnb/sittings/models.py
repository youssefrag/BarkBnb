from django.db import models
from enum import unique
from django.db.models.deletion import CASCADE
from users.models import Profile

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
    sitter = models.ForeignKey(
        Profile, null=True, blank=True, on_delete=CASCADE)
    location = models.CharField(max_length=200, choices=CITY_CHOICES)
    start_date = models.DateField()
    end_date = models.DateField()
    price = models.IntegerField()

