from django.db import models

# Create your models here.
# Suggested code may be subject to a license. Learn more: ~LicenseLog:2248651578.
# Suggested code may be subject to a license. Learn more: ~LicenseLog:2826618020.
class Task(models.Model):
    title = models.CharField(max_length=200)
    done = models.BooleanField(default=False)

    def __str__(self):
        return self.title
