from rest_framework import serializers
from .models import Job, Skills


# Job Serializer
class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = "__all__"


# Job Skill Serializer
class JobSkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skills
        fields = "__all__"
