from django.test import TestCase
from .graph_setup_coord import *

def test_create_graph():
    G = create_graph()
    assert isinstance(G, nx.DiGraph)
    assert len(G.nodes()) > 0 
    assert len(G.edges()) > 0  

def test_calculate_turn_direction():
    # Test for a right turn
    assert calculate_turn_direction(180, 90) == 'rechts'
    # Test for a left turn
    assert calculate_turn_direction(180, -90) == 'links'
    # Test for no turn
    assert calculate_turn_direction(0, 90) is None
    assert calculate_turn_direction(180, -180) is None
    # Test for non 90-degree turns
    assert calculate_turn_direction(0, 45) is None

def test_calculate_angles():
    G = create_graph()
    # Test with valid nodes
    assert calculate_angles(G, "F4.20_c", "F4.20_conn", "F4.22_c") == 'rechts'
    # Test with non-existent node
    assert calculate_angles(G, "F4.20_c", "F4.20_conn", "non_existent_node") is None

def test_find_shortest_path():
    G = create_graph()
    # Test valid path
    path, descriptions = find_shortest_path(G, "stairs_right", "F4.23")
    assert path is not None
    assert len(descriptions) > 0
    # Test no path
    path, descriptions = find_shortest_path(G, "F4.24", "non_existent_node")
    assert path is None
    assert descriptions == "No path exists between the specified nodes."