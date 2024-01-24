from rest_framework.views import APIView
from rest_framework.response import Response
from ..services.pathfinding_service import PathfindingService

import json

class PathFindingView(APIView):

    """
    API View to find the shortest path between two points in a graph.
    Expects 'start' and 'end' in the POST request data.
    """

    path_finding_service = PathfindingService()

    def post(self, request):
        data = json.loads(request.body)
        start = data.get('startNode')
        end = data.get('endNode')

        response = self.path_finding_service.find_path(start, end)
        
        return Response(response[0], status=response[1])