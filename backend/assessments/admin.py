from django.contrib import admin
from .models import Questions, Answers, UserAnswers


class QuestionsAdmin(admin.ModelAdmin):
    list_display = ('id', 'question', 'created_at')
    list_display_links = ('id', 'question',)


class AnswersAdmin(admin.ModelAdmin):
    list_display = ('id', 'question', 'answer', )
    list_display_links = ('id', 'answer',)


class UserAnswersAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'question', 'answer', )
    list_display_links = ('id', 'user',)


admin.site.register(Questions, QuestionsAdmin)
admin.site.register(Answers, AnswersAdmin)
admin.site.register(UserAnswers, UserAnswersAdmin)
