from .serializers import JobSerializer, JobSkillSerializer
from .models import Job, Skills
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response


# POST and GET Jobs
class JobView(generics.ListCreateAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer

    def get_queryset(self, *args, **kwargs):
        return Job.objects.filter(user=self.request.user)


# Get, Update and Delete Single Job of User
class JobDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer

    def get_queryset(self, *args, **kwargs):
        return Job.objects.filter(user=self.request.user)


# Get Only Single Job Detail
class JobDetailSingle(generics.ListAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer

    def get_queryset(self, *args, **kwargs):
        return Job.objects.filter(id=self.kwargs['pk'])


# GET All Jobs
class JobsList(generics.ListAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer


# POST and GET Skills
class JobSkillView(generics.ListCreateAPIView):
    queryset = Skills.objects.all()
    serializer_class = JobSkillSerializer


# Get Single Job Skills
class SingleJobSkills(generics.ListAPIView):
    queryset = Skills.objects.all()
    serializer_class = JobSkillSerializer

    def get_queryset(self, *args, **kwargs):
        return Skills.objects.filter(job=self.kwargs['pk'])


class JobLastAdded(APIView):
    def get(self, request, format=None):
        requests = Job.objects.filter(
            user=request.user.id).last()
        serializer = JobSerializer(requests)
        return Response(serializer.data)
