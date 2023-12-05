import networkx as nx
import math

def create_graph():
    # Create a directed graph
    G = nx.DiGraph()

    # Add nodes
    G.add_node("F4.27",   coord=(0, 2), type="room")
    G.add_node("F4.27_c", coord=(0, 0), type="corridor")
    G.add_node("F4.26",   coord=(1, 2), type="room")
    G.add_node("F4.26_c", coord=(1, 0), type="corridor")
    G.add_node("F4.25",   coord=(2, 2), type="room")
    G.add_node("F4.25_c", coord=(2, 0), type="corridor")
    G.add_node("F4.24",   coord=(3, 2), type="room")
    G.add_node("F4.24_c", coord=(3, 0), type="corridor")
    G.add_node("F4.23",   coord=(4, 2), type="room")
    G.add_node("F4.23_c", coord=(4, 0), type="corridor")
    G.add_node("F4.22",   coord=(5, 2), type="room")
    G.add_node("F4.22_c", coord=(5, 0), type="corridor")
    G.add_node("F4.20",   coord=(6, 1), type="room")
    G.add_node("F4.20_c", coord=(6, 0), type="corridor")
    G.add_node("toilet",  type="wc")
    G.add_node("hall",    type="hall")
    G.add_node("lift",    type="lift")

    # Add directed edges with weights and descriptions between rooms and their respective corridor nodes
    G.add_edge("F4.27", "F4.27_c", weight=1, description="F4.27 bis F4.27 Korridor")
    G.add_edge("F4.27_c", "F4.27", weight=1, description="F4.27 Korridor bis F4.27")

    G.add_edge("F4.26", "F4.26_c", weight=1, description="F4.26 bis F4.26 Korridor")
    G.add_edge("F4.26_c", "F4.26", weight=1, description="F4.26 Korridor bis F4.26")

    G.add_edge("F4.25", "F4.25_c", weight=1, description="F4.25 bis F4.25 Korridor")
    G.add_edge("F4.25_c", "F4.25", weight=1, description="F4.25 Korridor bis F4.25")

    G.add_edge("F4.24", "F4.24_c", weight=1, description="F4.24 bis F4.24 Korridor")
    G.add_edge("F4.24_c", "F4.24", weight=1, description="F4.24 Korridor bis F4.24")

    G.add_edge("F4.23", "F4.23_c", weight=1, description="F4.23 bis F4.23 Korridor")
    G.add_edge("F4.23_c", "F4.23", weight=1, description="F4.23 Korridor bis F4.23")

    G.add_edge("F4.22", "F4.22_c", weight=1, description="F4.22 bis F4.22 Korridor")
    G.add_edge("F4.22_c", "F4.22", weight=1, description="F4.22 Korridor bis F4.22")

    G.add_edge("F4.20", "F4.20_c", weight=1, description="F4.20 bis F4.20 Korridor")
    G.add_edge("F4.20_c", "F4.20", weight=1, description="F4.20 Korridor bis F4.20")


    # Add directed edges with weights and descriptions between corridor nodes
    G.add_edge("F4.27_c", "F4.26_c", weight=2, description="F4.27 Korridor bis F4.26 Korridor")
    G.add_edge("F4.26_c", "F4.27_c", weight=2, description="F4.26 Korridor bis F4.27 Korridor")

    G.add_edge("F4.26_c", "F4.25_c", weight=2, description="F4.26 Korridor bis F4.25 Korridor")
    G.add_edge("F4.25_c", "F4.26_c", weight=2, description="F4.25 Korridor bis F4.26 Korridor")

    G.add_edge("F4.25_c", "F4.24_c", weight=2, description="F4.25 Korridor bis F4.24 Korridor")
    G.add_edge("F4.24_c", "F4.25_c", weight=2, description="F4.24 Korridor bis F4.25 Korridor")

    G.add_edge("F4.24_c", "F4.23_c", weight=2, description="F4.24 Korridor bis F4.23 Korridor")
    G.add_edge("F4.23_c", "F4.24_c", weight=2, description="F4.23 Korridor bis F4.24 Korridor")

    G.add_edge("F4.23_c", "F4.22_c", weight=2, description="F4.23 Korridor bis F4.22 Korridor")
    G.add_edge("F4.22_c", "F4.23_c", weight=2, description="F4.22 Korridor bis F4.23 Korridor")

    G.add_edge("F4.22_c", "F4.20_c", weight=2, description="F4.22 Korridor bis F4.20 Korridor")
    G.add_edge("F4.20_c", "F4.22_c", weight=2, description="F4.20 Korridor bis F4.22 Korridor")

    G.add_edge("F4.20_c", "toilet", weight=2, description="F4.20 Korridor bis toilet")
    G.add_edge("toilet", "F4.20_c", weight=2, description="Toilet bis F4.20 Korridor")

    G.add_edge("toilet", "hall", weight=2, description="Toilette bis Flur")
    G.add_edge("hall", "toilet", weight=2, description="Flur bis Toilette")

    G.add_edge("hall", "lift", weight=2, description="Flur bis Aufzug")
    G.add_edge("lift", "hall", weight=2, description="Aufzug bis Flur")

    return G

def vector_angle(coord1, coord2):
    # Calculate vector based on coordinates
    vector = (coord2[0] - coord1[0], coord2[1] - coord1[1])
    # Calculate angle with respect to the x-axis
    angle = math.atan2(vector[1], vector[0])
    return math.degrees(angle)

# Calculate turn direction based on the angles of two consecutive edges
def calculate_turn_direction(angle1, angle2):
    # Calculate the difference in angle
    angle_diff = angle2 - angle1
    # Normalize the angle difference
    angle_diff = (angle_diff + 180) % 360 - 180  # Angle difference in range [-180, 180]
    if angle_diff > 0:
        return 'links'
    elif angle_diff < 0:
        return 'rechts'
    else:
        return 'geradeaus'


def calculate_direction(prev_node, current_node, next_node):
    coord1 = prev_node if prev_node else current_node  # Handle the case when prev_node is None
    coord2 = current_node
    coord3 = next_node
    
    # Calculate the vectors for the incoming and outgoing paths
    vector_in = (coord2['coord'][0] - coord1['coord'][0], coord2['coord'][1] - coord1['coord'][1])
    vector_out = (coord3['coord'][0] - coord2['coord'][0], coord3['coord'][1] - coord2['coord'][1])
    
    # Calculate the angle between vectors
    angle_in = math.atan2(vector_in[1], vector_in[0])
    angle_out = math.atan2(vector_out[1], vector_out[0])
    
    # Use the angles to determine the direction
    turn_direction = calculate_turn_direction(math.degrees(angle_in), math.degrees(angle_out))
    return turn_direction


# def find_shortest_path(graph, start_node, end_node):
#     try:
#         path = nx.dijkstra_path(graph, start_node, end_node)
#         path_edges = [(path[n], path[n + 1]) for n in range(len(path) - 1)]
#         descriptions = []
#         accumulated_distance = 0
#         accumulated_nodes = 0

#         for i, edge in enumerate(path_edges):
#             current_node, next_node = edge
#             edge_data = graph[current_node][next_node]

#             if graph.nodes[current_node]['type'] == 'corridor' and graph.nodes[next_node]['type'] == 'corridor':
#                 # Accumulate distance
#                 accumulated_distance += edge_data['weight']
#                 accumulated_nodes += 1

#             else:
#                 # Add accumulated distance to the description
#                 if accumulated_distance:
#                     descriptions.append(f"Gehen Sie geradeaus fuer {accumulated_distance} Schritte, vorbei an {accumulated_nodes} Zimmern")
#                     accumulated_distance = 0
#                     accumulated_nodes = 0

#                 if graph.nodes[current_node]['type'] == 'room' and graph.nodes[next_node]['type'] == 'corridor':
#                     if i < len(path) - 2:  # Ensure there is a node after next_node to compare with
#                         next_next_node = path[i + 2]
#                         turn_direction = determine_turn_direction(next_node, next_next_node)
#                         descriptions.append(f"{edge_data['description']} und biegen Sie {turn_direction} ab")
#                         continue

#                 elif graph.nodes[current_node]['type'] == 'corridor' and graph.nodes[next_node]['type'] == 'room':
#                     if i != 0:
#                         prev_node = path[i - 1]
#                         turn_direction = determine_turn_direction(prev_node, current_node)
#                         descriptions.append(f"Biegen Sie {turn_direction} ab, {edge_data['description']}")
#                         continue

#                 # If there is no accumulated distance, add the current edge's description
#                 descriptions.append(edge_data['description'])
        
#         return path, descriptions
    
#     except nx.NetworkXNoPath:
#         return None, "No path exists between the specified nodes."