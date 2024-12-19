from django.test import TestCase
from fhtways.services.graph_service import GraphService
from fhtways.models import Node, Edge

class GraphServiceTestCase(TestCase):
    def setUp(self):
        self.node1 = Node.objects.create(name="stairs_right", coord_x=0, coord_y=0, node_type="stairs")
        self.node2 = Node.objects.create(name="F4.23", coord_x=10, coord_y=10, node_type="room")
        Edge.objects.create(from_node=self.node1, to_node=self.node2, weight=5.0, description="Test edge")
        self.graph_service = GraphService()

    def test_create_graph(self):
        self.assertGreater(len(self.graph_service.graph.nodes), 0, "The graph should have nodes.")
        self.assertGreater(len(self.graph_service.graph.edges), 0, "The graph should have edges.")

    def test_calculate_turn_direction(self):
        self.assertEqual(self.graph_service.calculate_turn_direction(180, 90), 'rechts')
        self.assertEqual(self.graph_service.calculate_turn_direction(180, -90), 'links')
        self.assertIsNone(self.graph_service.calculate_turn_direction(0, 0))
        self.assertIsNone(self.graph_service.calculate_turn_direction(0, 45))

    def test_calculate_angles(self):
        self.assertEqual(self.graph_service.calculate_angles("stairs_right", "F4.23", None), '')

    def test_find_shortest_path(self):
        path, descriptions = self.graph_service.find_shortest_path("stairs_right", "F4.23")
        self.assertIsNotNone(path)
        self.assertGreater(len(descriptions), 0)
