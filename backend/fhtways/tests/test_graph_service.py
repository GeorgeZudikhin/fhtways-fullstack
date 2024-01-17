from django.test import TestCase
from fhtways.services.graph_service import GraphService
import networkx as nx

class GraphServiceTestCase(TestCase):
    def setUp(self):
        # Set up any pre-conditions for your tests here
        self.graph_service = GraphService()
        self.graph = self.graph_service.create_graph()

    def test_create_graph(self):
        # Ensure the graph has been created and has the correct properties
        self.assertIsInstance(self.graph, nx.DiGraph, "The graph must be an instance of networkx's DiGraph")
        self.assertEqual(len(self.graph.nodes), 36, "The graph should have 36 nodes.")
        self.assertEqual(len(self.graph.edges), 82, "The graph should have 82 edges.")

    def test_calculate_turn_direction(self):
        # Test for a right turn
        assert self.graph_service.calculate_turn_direction(180, 90) == 'rechts'
        # Test for a left turn
        assert self.graph_service.calculate_turn_direction(180, -90) == 'links'
        # Test for no turn
        assert self.graph_service.calculate_turn_direction(0, 90) is None
        assert self.graph_service.calculate_turn_direction(180, -180) is None
        # Test for non-90-degree turns
        assert self.graph_service.calculate_turn_direction(0, 45) is None

    def test_calculate_angles(self):
        graph = self.graph_service.create_graph()
        # Test with valid nodes
        assert self.graph_service.calculate_angles(graph, "F4.20_c", "F4.20_conn", "F4.22_c") == 'rechts'
        # Test with non-existent node
        assert self.graph_service.calculate_angles(graph, "F4.20_c", "F4.20_conn", "non_existent_node") is None

    def test_find_shortest_path(self):
        graph = self.graph_service.create_graph()
        # Test valid path
        path, descriptions = self.graph_service.find_shortest_path(graph, "stairs_right", "F4.23")
        assert path is not None
        assert len(descriptions) > 0
        # Test no path
        path, descriptions = self.graph_service.find_shortest_path(graph, "F4.24", "non_existent_node")
        assert path is None
        assert descriptions == "No path exists between the specified nodes."