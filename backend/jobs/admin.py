from django.contrib import admin
from django_admin_listfilter_dropdown.filters import DropdownFilter, ChoiceDropdownFilter
from .models import Job, Skills


# Jobs Admin Display
class JobsAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'work_email', 'hiring_needs', 'user',)
    list_display_links = ('id', 'title')
    list_per_page = 50
    list_filter = (('current_employees', ChoiceDropdownFilter),
                   ('hiring_needs', ChoiceDropdownFilter))


# Job Skills Admin Display
class JobSkillsAdmin(admin.ModelAdmin):
    list_display = ('id', 'job', 'name', 'rating',)
    list_display_links = ('id', 'name')
    list_per_page = 50
    list_filter = (('name', DropdownFilter), ('rating', DropdownFilter),)


admin.site.register(Job, JobsAdmin)
admin.site.register(Skills, JobSkillsAdmin)
