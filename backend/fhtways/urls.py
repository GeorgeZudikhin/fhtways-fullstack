from django.urls import path
from .views.pathfinding_views import PathFindingView

urlpatterns = [
    path('find-path/', PathFindingView.as_view(), name='find-path'),
]
