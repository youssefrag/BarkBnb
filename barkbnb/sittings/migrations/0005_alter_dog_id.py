# Generated by Django 4.1 on 2022-08-24 16:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("sittings", "0004_alter_sitting_id"),
    ]

    operations = [
        migrations.AlterField(
            model_name="dog",
            name="id",
            field=models.BigAutoField(
                auto_created=True, primary_key=True, serialize=False, verbose_name="ID"
            ),
        ),
    ]