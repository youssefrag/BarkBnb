# Generated by Django 4.1 on 2022-09-21 18:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("sittings", "0011_dog_dog_image"),
    ]

    operations = [
        migrations.AlterField(
            model_name="dog",
            name="dog_image",
            field=models.ImageField(
                blank=True,
                default="dogs/default-dog.jpeg",
                null=True,
                upload_to="dogs/",
            ),
        ),
    ]
