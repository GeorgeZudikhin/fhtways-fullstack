from django.urls import path
from . import views

urlpatterns = [
    path('pathfinding/<str:start>/<str:end>/', views.pathfinding),
]
