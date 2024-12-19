from django.test import TestCase
from fhtways.models import Node, Edge

class NodeModelTest(TestCase):
    def setUp(self):
        self.node1 = Node.objects.create(name="Node 1", coord_x=0, coord_y=0, node_type="room")
        self.node2 = Node.objects.create(name="Node 2", coord_x=1, coord_y=1, node_type="corridor")

    def test_node_creation(self):
        self.assertEqual(self.node1.name, "Node 1")
        self.assertEqual(self.node1.coord_x, 0)
        self.assertEqual(self.node1.coord_y, 0)
        self.assertEqual(self.node1.node_type, "room")

    def test_node_string_representation(self):
        self.assertEqual(str(self.node1), "Node 1")


class EdgeModelTest(TestCase):
    def setUp(self):
        self.node1 = Node.objects.create(name="Node 1", coord_x=0, coord_y=0, node_type="room")
        self.node2 = Node.objects.create(name="Node 2", coord_x=1, coord_y=1, node_type="corridor")
        self.edge = Edge.objects.create(from_node=self.node1, to_node=self.node2, weight=2.5, description="Test edge")

    def test_edge_creation(self):
        self.assertEqual(self.edge.from_node.name, "Node 1")
        self.assertEqual(self.edge.to_node.name, "Node 2")
        self.assertEqual(self.edge.weight, 2.5)

    def test_edge_string_representation(self):
        self.assertEqual(str(self.edge), "Edge from Node 1 to Node 2")
