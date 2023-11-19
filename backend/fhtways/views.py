from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from .graph_setup import create_graph, find_shortest_path

def pathfinding(request, start, end):
    graph = create_graph()
    path, descriptions = find_shortest_path(graph, start, end)
    return JsonResponse({"path": path, "descriptions": descriptions})
