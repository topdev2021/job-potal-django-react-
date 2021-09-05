from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import (
    UserSerializer, ProfileSerializer,
    EducationSerializer,
    ExperienceSerializer,
    AvailabilitySerializer,
    RoleSalarySerializer,
    UserSkillsSerializer,
    CompanySerializer,
    RecommendUserSerializer)
from .models import (Profile, Education, Availability,
                     RoleSalary, Experience, Company, UserSkills)
from accounts.models import UserAccount
from helpers.recommend import get_recommend_users

# GET Users
class UsersList(generics.ListAPIView):
    queryset = UserAccount.objects.filter(type='user')
    serializer_class = UserSerializer


# GET Recommend Users
class RecommendUsersList(APIView):

    def post(self, *args, **kwargs):
        job_id = self.request.data['job']
        users = get_recommend_users(job_id)
        return Response(users)


# GET Single User
class UserSingle(generics.RetrieveAPIView):
    queryset = UserAccount.objects.filter(type='user')
    serializer_class = UserSerializer


# POST and GET Profiles
class ProfileList(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def get_queryset(self, *args, **kwargs):
        return Profile.objects.filter(user=self.request.user)


# Get, Update and Delete Single Profile
class ProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def get_queryset(self, *args, **kwargs):
        return Profile.objects.filter(user=self.request.user)


# Get User's Single Profile
class ProfileUser(generics.ListAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def get_queryset(self, *args, **kwargs):
        return Profile.objects.filter(user=self.kwargs['pk'])


# POST and GET User Skills
class UsersSkills(generics.ListAPIView):
    queryset = UserSkills.objects.all()
    serializer_class = UserSkillsSerializer


# POST and GET User Skills
class UserSkillsList(generics.ListCreateAPIView):
    queryset = UserSkills.objects.all()
    serializer_class = UserSkillsSerializer

    def get_queryset(self, *args, **kwargs):
        return UserSkills.objects.filter(user=self.request.user)


# Get Single User Skills
class UserSkillsSingle(generics.ListAPIView):
    queryset = UserSkills.objects.all()
    serializer_class = UserSkillsSerializer

    def get_queryset(self, *args, **kwargs):
        return UserSkills.objects.filter(user=self.kwargs['pk'])


# POST and GET User Availability
class AvailabilityList(generics.ListCreateAPIView):
    queryset = Availability.objects.all()
    serializer_class = AvailabilitySerializer

    def get_queryset(self, *args, **kwargs):
        return Availability.objects.filter(user=self.request.user)


# Get, Update and Delete Single Availability
class AvailabilityDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Availability.objects.all()
    serializer_class = AvailabilitySerializer

    def get_queryset(self, *args, **kwargs):
        return Availability.objects.filter(user=self.request.user)


# Get User's Availability
class AvailabilityUser(generics.ListAPIView):
    queryset = Availability.objects.all()
    serializer_class = AvailabilitySerializer

    def get_queryset(self, *args, **kwargs):
        return Availability.objects.filter(user=self.kwargs['pk'])


# POST and GET Experience
class ExperienceList(generics.ListCreateAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer

    def get_queryset(self, *args, **kwargs):
        return Experience.objects.filter(user=self.request.user)


# Get, Update and Delete Single Experience
class ExperienceDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer

    def get_queryset(self, *args, **kwargs):
        return Experience.objects.filter(user=self.request.user)


# Get User's Experience
class ExperienceUser(generics.ListAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer

    def get_queryset(self, *args, **kwargs):
        return Experience.objects.filter(user=self.kwargs['pk'])


# POST and GET Education
class EducationList(generics.ListCreateAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer

    def get_queryset(self, *args, **kwargs):
        return Education.objects.filter(user=self.request.user)


# Get, Update and Delete Single Education
class EducationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer

    def get_queryset(self, *args, **kwargs):
        return Education.objects.filter(user=self.request.user)


# Get User's Education
class EducationUser(generics.ListAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer

    def get_queryset(self, *args, **kwargs):
        return Education.objects.filter(user=self.kwargs['pk'])


# POST and GET Role Salary
class RoleSalaryList(generics.ListCreateAPIView):
    queryset = RoleSalary.objects.all()
    serializer_class = RoleSalarySerializer

    def get_queryset(self, *args, **kwargs):
        return RoleSalary.objects.filter(user=self.request.user)


# Get, Update and Delete Single Role Salary
class RoleSalaryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = RoleSalary.objects.all()
    serializer_class = RoleSalarySerializer

    def get_queryset(self, *args, **kwargs):
        return RoleSalary.objects.filter(user=self.request.user)


# Get User's Role Salary
class RoleSalaryUser(generics.ListAPIView):
    queryset = RoleSalary.objects.all()
    serializer_class = RoleSalarySerializer

    def get_queryset(self, *args, **kwargs):
        return RoleSalary.objects.filter(user=self.kwargs['pk'])


# POST and GET Company Profile
class CompanyProfileList(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

    def get_queryset(self, *args, **kwargs):
        return Company.objects.filter(user=self.request.user)


# Get, Update and Delete Single Company Profile
class CompanyProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

    def get_queryset(self, *args, **kwargs):
        return Company.objects.filter(user=self.request.user)
