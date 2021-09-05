from django.urls import path
from .views import FirstQuestion, GetAnswers, NextQuestion, SubmitAnswer, getQuestions

urlpatterns = [
    path('first', FirstQuestion.as_view()),
    path('next/<int:pk>', NextQuestion.as_view()),
    path('submit', SubmitAnswer.as_view()),
    path('answers', GetAnswers.as_view()),
    path('all', getQuestions.as_view()),
]
