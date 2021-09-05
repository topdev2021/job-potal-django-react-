from rest_framework import serializers
from .models import Questions, Answers, UserAnswers


# Questions Serializer
class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Questions
        fields = "__all__"


# Answers Serializer
class AnswersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answers
        fields = "__all__"


# User Answers Serializer
class UserAnswersSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAnswers
        fields = "__all__"
