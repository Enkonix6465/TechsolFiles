from django.db import models

# Create your models here.

class Job(models.Model):
    title = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
class Application(models.Model):
    fullname = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    role = models.CharField(max_length=255)  #store the Job Title they apply for
    resume_link = models.URLField()
    linkedin_link = models.URLField()
    applied_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.fullname} - {self.role}"