from django.db import models
from django.contrib.auth import get_user_model
from datetime import datetime
from django.core.validators import MinValueValidator, MaxValueValidator
User = get_user_model()

# ===============================
# English Proficiency
# ===============================


class EnglishProficiency(models.TextChoices):
    GREAT = 'Great'
    AVERAGE = 'Average'
    BASIC = 'Basic'


# ===============================
# Type of availability
# ===============================
class AvailabilityType(models.TextChoices):
    NOT_AVAILABLE = 'Not Available'
    PART_TIME = 'Part Time'
    FULL_TIME = 'Full Time'
    PRE_FULLTIME = 'Pre FullTime'


# ===============================
# Ready to start
# ===============================
class ReadyToStart(models.TextChoices):
    NOW = 'now'
    IN_1_WEEK = 'in 1 week'
    IN_2_WEEKS = 'in 2 weeks'
    IN_1_MONTH = 'in 1 month'
    MORE_THAN_1_MONTH = 'more than 1 month'


# ===============================
# Preferred Role
# ===============================
class PreferredRole(models.TextChoices):
    WEB_FRONTEND = 'Web Frontend'
    WEB_BACKEND = 'Web Backend'
    FULLSTACK_BE = 'Fullstack (BE Heavy)'
    FULLSTACK_FE = 'Fullstack (FE Heavy)'
    MOBILE = 'Mobile'
    MACHINE_LEARNING = 'Machine Learning'
    DEVOPS = 'DevOps'
    OTHER = 'Other'


# User Profile Model
class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)
    bio = models.TextField()
    github_link = models.CharField(max_length=255, blank=True, null=True)
    linkedin_link = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.first_name

    class Meta:
        verbose_name_plural = "Profiles"


# User Experience Model
class Experience(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    years_of_experience = models.IntegerField()
    years_of_remote_experience = models.IntegerField()
    english_proficiency = models.CharField(
        max_length=50, choices=EnglishProficiency.choices)

    def __str__(self):
        return self.user.name

    class Meta:
        verbose_name_plural = "Experience"


# User Availability Model
class Availability(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    availability_type = models.CharField(
        max_length=50, choices=AvailabilityType.choices)
    ready_to_start_in = models.CharField(
        max_length=50, choices=ReadyToStart.choices)

    def __str__(self):
        return self.user.name

    class Meta:
        verbose_name_plural = "Availability"


# Role and Salary Model
class RoleSalary(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    preferred_role = models.CharField(
        max_length=50, choices=PreferredRole.choices)
    current_salary = models.CharField(max_length=255)

    def __str__(self):
        return self.user.name

    class Meta:
        verbose_name_plural = "Role and Salary"


# Education Model
class Education(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    degree = models.CharField(max_length=255)
    college = models.CharField(max_length=255)
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return self.user.name

    class Meta:
        verbose_name_plural = "Education"


# Company Info Model
class Company(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    about = models.TextField()
    phone = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    website = models.CharField(max_length=255, blank=True)
    linkedin_link = models.CharField(max_length=255, blank=True)
    twitter_link = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Company Profile"


# User Skill Model
class UserSkills(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    rating = models.IntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(10)])

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Skills"
