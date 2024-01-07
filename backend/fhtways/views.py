# Create your views here.
from django.http import HttpResponse, JsonResponse
from .graph_setup_coord import *

def find_path(request):
    start = request.GET.get('start')
    end = request.GET.get('end')
    graph = create_graph()
    path, descriptions = find_shortest_path(graph, start, end)

    # description_text = "Path: "
    # description_text += ' -> '. join(path)
    # description_text += '\n'
    # description_text += "Descriptions: "
    # description_text += ' '.join(descriptions)
    return JsonResponse({'path_description': descriptions})
