from django.test import TestCase
import pytest
from .graph_setup_coord import *

def test_create_graph():
    G = create_graph()
    assert isinstance(G, nx.DiGraph)
    assert len(G.nodes()) > 0  # Ensure nodes are added
    assert len(G.edges()) > 0  # Ensure edges are added

def test_calculate_turn_direction():
    # Test for a right turn
    assert calculate_turn_direction(0, -90) == 'rechts'
    # Test for a left turn
    assert calculate_turn_direction(0, 90) == 'links'
    # Test for no turn
    assert calculate_turn_direction(0, 0) is None
    # Test for non 90-degree turns
    assert calculate_turn_direction(0, 45) is None

def test_calculate_angles():
    G = create_graph()
    # Test with valid nodes
    assert calculate_angles(G, "F4.24", "F4.24_c", "F4.23_c") in ['links', 'rechts']
    # Test with non-existent node
    assert calculate_angles(G, "F4.24", "F4.24_c", "non_existent_node") == ''

def test_find_shortest_path():
    G = create_graph()
    # Test valid path
    path, descriptions = find_shortest_path(G, "F4.24", "F4.23")
    assert path is not None
    assert len(descriptions) > 0
    # Test no path
    path, descriptions = find_shortest_path(G, "F4.24", "non_existent_node")
    assert path is None
    assert descriptions == "No path exists between the specified nodes."

# Create your tests here.
