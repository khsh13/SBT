from django.contrib import admin
from .models import Code
# Register your models here.

@admin.register(Code)
class CodeAdmin(admin.ModelAdmin):
    list_display = ['File_type','Actual_Code']