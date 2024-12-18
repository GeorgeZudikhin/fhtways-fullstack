import csv
from django.core.management.base import BaseCommand
from fhtways.models.models import Node, Edge

class Command(BaseCommand):
    help = "Populates the Node and Edge tables with data from CSV files."

    def handle(self, *args, **kwargs):
        # Populate Nodes
        self.stdout.write("Populating Nodes...")
        with open('fhtways/data_csv/F4_nodes.csv', newline='', encoding='utf-8') as csvfile:
            reader = csv.DictReader(csvfile, delimiter=';')
            for row in reader:
                node, created = Node.objects.get_or_create(
                    name=row['node'],
                    coord_x=row['coord_x'],
                    coord_y=row['coord_y'],
                    node_type=row['type']
                )
                if created:
                    self.stdout.write(f"Created Node: {node.name}")

        # Populate Edges
        self.stdout.write("Populating Edges...")
        with open('fhtways/data_csv/F4_edges.csv', newline='', encoding='utf-8') as csvfile:
            reader = csv.DictReader(csvfile, delimiter=';')
            for row in reader:
                from_node = Node.objects.get(name=row['source'])
                to_node = Node.objects.get(name=row['target'])
                edge, created = Edge.objects.get_or_create(
                    from_node=from_node,
                    to_node=to_node,
                    weight=row['weight'],
                    description=row['description']
                )
                if created:
                    self.stdout.write(f"Created Edge from {from_node.name} to {to_node.name}")

        self.stdout.write("Database population complete!")
