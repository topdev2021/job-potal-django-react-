from django.contrib import admin
from .models import Profile, Education, Experience, Availability, RoleSalary, Company, UserSkills


# Profiles Admin Display
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'first_name', 'last_name',
                    'phone', 'country')
    list_display_links = ('id', 'first_name')
    list_per_page = 25


# Experience Admin Display
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'years_of_experience',
                    'years_of_remote_experience', 'english_proficiency',)
    list_display_links = ('id', 'user')
    list_per_page = 25


# Availability Admin Display
class AvailabilityAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'availability_type', 'ready_to_start_in',)
    list_display_links = ('id', 'user')
    list_per_page = 25


# Role Salary Admin Display
class RoleSalaryAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'preferred_role', 'current_salary',)
    list_display_links = ('id', 'user')
    list_per_page = 25


# Education Admin Display
class EducationAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'degree', 'college',)
    list_display_links = ('id', 'user')
    list_per_page = 25


# Skills Admin Display
class UserSkillsAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'name', 'rating',)
    list_display_links = ('id', 'user')
    list_per_page = 25


# Company Profile Admin Display
class CompanyProfileAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'name', 'phone',)
    list_display_links = ('id', 'name')
    list_per_page = 25


admin.site.register(Profile, ProfileAdmin)
admin.site.register(Experience, ExperienceAdmin)
admin.site.register(Availability, AvailabilityAdmin)
admin.site.register(RoleSalary, RoleSalaryAdmin)
admin.site.register(Education, EducationAdmin)
admin.site.register(UserSkills, UserSkillsAdmin)
admin.site.register(Company, CompanyProfileAdmin)
