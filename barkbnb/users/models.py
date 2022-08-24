from django.db import models
from django.contrib.auth.models import User

# from django.db.models.signals import post_save, post_delete
# from django.dispatch import receiver

import uuid

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    email = models.EmailField(max_length=500, null=True, blank=True)
    username = models.CharField(max_length=200, null=True, blank=True)
    sittings_completed = models.IntegerField(default=0, null=True, blank=True)
    bio = models.TextField(null=True, blank=True)
    profile_image = models.ImageField(
        null=True, blank=True
        # upload_to='profiles/', default="profiles/user-default.png"
        )
    created = models.DateTimeField(auto_now_add=True)
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)

    def __str__(self):
        return str(self.username)


# @receiver(post_save, sender=User)
# def createProfile(sender, instance, created, **kwargs):
#     if created:
#         print('USER IS BEING CREATED')
#         user = instance
#         profile = Profile.objects.create(
#             user=user,
#             username=user.username,
#             email=user.email,
#             name=user.first_name,
#         )


# @receiver(post_save, sender=Profile)
# def updateUser(sender, instance, created, **kwargs):
#     profile = instance
#     user = profile.user
#     if created == False:
#         user.first_name = profile.name
#         user.username = profile.username
#         user.email = profile.email
#         user.save()

# @receiver(post_delete, sender=Profile)
# def deleteUser(sender, instance, **kwargs):
#     user = instance.user
#     user.delete()