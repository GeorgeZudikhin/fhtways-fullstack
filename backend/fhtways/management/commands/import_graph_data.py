from django.core.management.base import BaseCommand
from fhtways.models import Node, Edge
from fhtways.services.graph_service import GraphService

class Command(BaseCommand):
    help = 'Imports graph data into the database from GraphService.'

    def handle(self, *args, **options):
        # Initialize the graph service and create the graph
        graph_service = GraphService()
        G = graph_service.create_graph()

        # Iterate through nodes and create them in the database
        for node, data in G.nodes(data=True):
            Node.objects.update_or_create(
                node_id=node,
                defaults={
                    'coord': data['coord'],
                    'type': data['type']
                }
            )
        
        self.stdout.write(self.style.SUCCESS('Successfully imported nodes into the database.'))

        # Iterate through edges and create them in the database
        for start, end, data in G.edges(data=True):
            start_node = Node.objects.get(node_id=start)
            end_node = Node.objects.get(node_id=end)
            Edge.objects.update_or_create(
                start_node=start_node,
                end_node=end_node,
                defaults={
                    'weight': data.get('weight', 1),  # Provide default weight if not available
                    'description': data['description']
                }
            )
        
        self.stdout.write(self.style.SUCCESS('Successfully imported edges into the database.'))
