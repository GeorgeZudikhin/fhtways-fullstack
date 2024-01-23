from .graph_service import GraphService
from rest_framework import status

class PathfindingService:

    graph_service = GraphService()

    def find_path(self, start, end):
        try:
            graph = self.graph_service.create_graph()
            _, descriptions = self.graph_service.find_shortest_path(graph, start, end)
            
            return ({"path": descriptions}, status.HTTP_200_OK)

        except Exception as e: 
            return ({"error": str(e)}, status.HTTP_500_INTERNAL_SERVER_ERROR)