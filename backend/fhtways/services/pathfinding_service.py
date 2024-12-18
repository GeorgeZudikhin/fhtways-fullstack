from .graph_service import GraphService
from rest_framework import status

class PathfindingService:
    graph_service = GraphService()

    def find_path(self, start, end):
        try:
            _, descriptions = self.graph_service.find_shortest_path(start, end)
            
            return ({"path": descriptions}, status.HTTP_200_OK)

        except Exception as e: 
            return ({"error": str(e)}, status.HTTP_500_INTERNAL_SERVER_ERROR)