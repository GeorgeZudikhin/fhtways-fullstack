from django.urls import path
from . import views

urlpatterns = [
    path('find-path/', views.find_path, name='find-path'),
]
