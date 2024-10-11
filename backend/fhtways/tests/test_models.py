from django.test import TestCase
from backend.models.graph_models import Node, Edge

class NodeModelTest(TestCase):
    def setUp(self):
        # Use setUp() to initialize test data
        self.node1 = Node.objects.create(name="Node 1", data={"key": "value"})
        self.node2 = Node.objects.create(name="Node 2", data={"key": "another_value"})

    def test_node_creation(self):
        self.assertEqual(self.node1.name, "Node 1")
        self.assertEqual(self.node2.name, "Node 2")

    def test_node_string_representation(self):
        # Test the string representation of the Node models
        self.assertEqual(str(self.node1), "Node 1")


class EdgeModelTest(TestCase):
    def setUp(self):
        # Create nodes and an edge between them
        self.node1 = Node.objects.create(name="Node 1", data={"key": "value"})
        self.node2 = Node.objects.create(name="Node 2", data={"key": "another_value"})
        self.edge = Edge.objects.create(from_node=self.node1, to_node=self.node2, weight=2.5)

    def test_edge_creation(self):
        # Test that the edge is created successfully
        self.assertEqual(self.edge.from_node.name, "Node 1")
        self.assertEqual(self.edge.to_node.name, "Node 2")
        self.assertEqual(self.edge.weight, 2.5)

    def test_edge_string_representation(self):
        # Test the string representation of the Edge models
        self.assertEqual(str(self.edge), "Edge from Node 1 to Node 2")