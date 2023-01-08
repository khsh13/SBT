from django.db import models

# Create your models here.
class Code(models.Model):
    File_type = models.CharField(max_length=10)
    Actual_Code = models.CharField(max_length=5000)
