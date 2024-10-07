# Suggested code may be subject to a license. Learn more: ~LicenseLog:2771016982.
from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'