# Generated by Django 4.1 on 2022-08-23 19:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0001_initial"),
    ]

    operations = [
        migrations.RemoveField(model_name="profile", name="username",),
    ]
