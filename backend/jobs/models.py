from django.db import models
from django.contrib.auth import get_user_model
from django.core.validators import MinValueValidator, MaxValueValidator
from datetime import datetime

User = get_user_model()


# ===============================
# Job Hiring Needs
# ===============================
class HiringNeeds(models.TextChoices):
    NOT_AVAILABLE = 'Not Available'
    PART_TIME = 'Part Time'
    FULL_TIME = 'Full Time'


# ===============================
# Job Hiring Needs
# ===============================
COMPANY_EMPLOYEES = [
    ('1-3', '1-3'),
    ('4-10', '4-10'),
    ('11-50', '11-50'),
    ('51-1000', '51-1000'),
    ('1000+', '1000+'),
]


# Job Model
class Job(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    work_email = models.CharField(max_length=255)
    hiring_needs = models.CharField(
        max_length=50, choices=HiringNeeds.choices)
    current_employees = models.CharField(
        max_length=50, choices=COMPANY_EMPLOYEES)
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)
    website = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "Jobs"


# Job Skill Model
class Skills(models.Model):
    job = models.ForeignKey(Job, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    rating = models.IntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(10)])

    def __str__(self):
        return self.job.title

    class Meta:
        verbose_name_plural = "Job Skills"
