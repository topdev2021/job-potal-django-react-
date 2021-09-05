from django.db import models
from django.contrib.auth import get_user_model
from datetime import datetime
User = get_user_model()


class Questions(models.Model):
    question = models.CharField(max_length=255)
    created_at = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.question

    class Meta:
        verbose_name_plural = "Questions"


class Answers(models.Model):
    question = models.ForeignKey(Questions, on_delete=models.CASCADE)
    answer = models.CharField(max_length=255)

    def __str__(self):
        return self.answer

    class Meta:
        verbose_name_plural = "Answers"


class UserAnswers(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    question = models.ForeignKey(Questions, on_delete=models.CASCADE)
    answer = models.ForeignKey(Answers, on_delete=models.CASCADE)

    def __str__(self):
        return self.question.question

    class Meta:
        verbose_name_plural = "User Answers"
