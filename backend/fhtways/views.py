from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from .graph_setup import *

def pathfinding(request, start, end):
    graph = create_graph()
    path, descriptions = find_shortest_path(graph, start, end)

    description_text = "Path: "
    description_text += ' -> '. join(path)
    description_text += '\n'
    description_text += "Descriptions: "
    description_text += '. '.join(descriptions)
    return HttpResponse(description_text, content_type="text/plain")
