import networkx as nx

def create_graph():
    # Create a directed graph
    G = nx.DiGraph()

    # Add nodes
    G.add_node("F4.27",   type="room")
    G.add_node("F4.27_c", type="corridor")
    G.add_node("F4.26",   type="room")
    G.add_node("F4.26_c", type="corridor")
    G.add_node("F4.25",   type="room")
    G.add_node("F4.25_c", type="corridor")
    G.add_node("F4.24",   type="room")
    G.add_node("F4.24_c", type="corridor")
    G.add_node("F4.23",   type="room")
    G.add_node("F4.23_c", type="corridor")
    G.add_node("F4.22",   type="room")
    G.add_node("F4.22_c", type="corridor")
    G.add_node("F4.20",   type="room")
    G.add_node("F4.20_c", type="corridor")
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

# Extracts the numerical part of a node name, e.g., 'F4.27' -> 27
def extract_room_number(node_name):
    room_number = ''.join(filter(lambda x: x.isdigit() or x == '.', node_name))
    return float(room_number[:4])


# Determines the turn direction based on the room number comparison
def determine_turn_direction(from_node, to_node):
    from_number = extract_room_number(from_node)
    to_number = extract_room_number(to_node)
    if to_number < from_number:
        return 'links'
    elif to_number > from_number:
        return 'rechts'
    else:
        return 'geradeaus'


def find_shortest_path(graph, start_node, end_node):
    try:
        path = nx.dijkstra_path(graph, start_node, end_node)
        path_edges = [(path[n], path[n + 1]) for n in range(len(path) - 1)]
        descriptions = []
        accumulated_distance = 0
        accumulated_nodes = 0

        for i, edge in enumerate(path_edges):
            current_node, next_node = edge
            edge_data = graph[current_node][next_node]

            if graph.nodes[current_node]['type'] == 'corridor' and graph.nodes[next_node]['type'] == 'corridor':
                # Accumulate distance
                accumulated_distance += edge_data['weight']
                accumulated_nodes += 1

            else:
                # Add accumulated distance to the description
                if accumulated_distance:
                    descriptions.append(f"Gehen Sie geradeaus fuer {accumulated_distance} Schritte, vorbei an {accumulated_nodes} Zimmern")
                    accumulated_distance = 0
                    accumulated_nodes = 0

                if graph.nodes[current_node]['type'] == 'room' and graph.nodes[next_node]['type'] == 'corridor':
                    if i < len(path) - 2:  # Ensure there is a node after next_node to compare with
                        next_next_node = path[i + 2]
                        turn_direction = determine_turn_direction(next_node, next_next_node)
                        descriptions.append(f"{edge_data['description']} und biegen Sie {turn_direction} ab")
                        continue

                elif graph.nodes[current_node]['type'] == 'corridor' and graph.nodes[next_node]['type'] == 'room':
                    if i != 0:
                        prev_node = path[i - 1]
                        turn_direction = determine_turn_direction(prev_node, current_node)
                        descriptions.append(f"Biegen Sie {turn_direction} ab, {edge_data['description']}")
                        continue

                # If there is no accumulated distance, add the current edge's description
                descriptions.append(edge_data['description'])
        
        return path, descriptions
    
    except nx.NetworkXNoPath:
        return None, "No path exists between the specified nodes."