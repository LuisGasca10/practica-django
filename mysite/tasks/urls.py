from django.urls import path
from .views import TaskView

urlpatterns = [
    path('api/tasks/', TaskView.as_view(), name='task_view'),
]