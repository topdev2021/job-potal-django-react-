# Generated by Django 3.1.7 on 2021-02-26 18:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0002_auto_20210226_2031'),
    ]

    operations = [
        migrations.AlterField(
            model_name='job',
            name='hiring_needs',
            field=models.CharField(choices=[('Not Available', 'Not Available'), ('Part Time', 'Part Time'), ('Full Time', 'Full Time')], max_length=50),
        ),
    ]
