from django.urls import path
from .views import JobView, JobDetail, JobDetailSingle, JobSkillView, JobLastAdded, JobsList, SingleJobSkills

urlpatterns = [
    path('', JobView.as_view()),
    path('list', JobsList.as_view()),
    path('last', JobLastAdded.as_view()),
    path('<int:pk>', JobDetail.as_view()),
    path('<int:pk>/single', JobDetailSingle.as_view()),
    path('skills', JobSkillView.as_view()),
    path('skills/<int:pk>', SingleJobSkills.as_view()),
]
