# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from .graph_setup_coord import *

class PathFindingView(APIView):
    def get(self, request, *args, **kwargs):
        start = request.query_params.get('start')
        end = request.query_params.get('end')
        graph = create_graph()
        _, descriptions = find_shortest_path(graph, start, end)
        
        return Response({"path": descriptions})
