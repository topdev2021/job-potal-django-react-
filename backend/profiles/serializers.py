from django.db.models import fields
from rest_framework import serializers
from .models import Profile, Availability, Education, RoleSalary, Experience, Company, UserSkills
from accounts.models import UserAccount


# User Account Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields = "__all__"


# Recommend User Serializer
class RecommendUserSerializer(serializers.ModelSerializer):
    rating = serializers.SerializerMethodField()

    class Meta:
        model = UserAccount
        fields = ('id', 'email', 'name')


# Profile Serializer
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = "__all__"


# User Skills Serializer
class UserSkillsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSkills
        fields = "__all__"


# Availability Serializer
class AvailabilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Availability
        fields = "__all__"


# Education Serializer
class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = "__all__"


# Experience Serializer
class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = "__all__"


# Role Salary Serializer
class RoleSalarySerializer(serializers.ModelSerializer):
    class Meta:
        model = RoleSalary
        fields = "__all__"


# Company Profile Serializer
class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = "__all__"
