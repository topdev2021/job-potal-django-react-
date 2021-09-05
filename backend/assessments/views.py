from .serializers import QuestionSerializer, AnswersSerializer, UserAnswersSerializer
from .models import Answers, Questions, UserAnswers
from rest_framework import generics
from django.http import JsonResponse


# GET First Question
class FirstQuestion(generics.ListAPIView):
    queryset = Questions.objects.all()[:1]
    serializer_class = QuestionSerializer


# GET Question's Answers
class GetAnswers(generics.ListAPIView):
    queryset = Answers.objects.all()
    serializer_class = AnswersSerializer


# GET Next Question
class NextQuestion(generics.ListAPIView):
    serializer_class = QuestionSerializer

    def get_queryset(self, *args, **kwargs):
        queryset = Questions.objects.filter(id__gt=self.kwargs['pk'])[:1]
        return queryset


# Submit User Answer
class SubmitAnswer(generics.ListCreateAPIView):
    queryset = UserAnswers.objects.all()
    serializer_class = UserAnswersSerializer

    def get_queryset(self, *args, **kwargs):
        return UserAnswers.objects.filter(user=self.request.user)


# Get All Questions
class getQuestions(generics.ListAPIView):
    queryset = Questions.objects.all()
    serializer_class = QuestionSerializer
