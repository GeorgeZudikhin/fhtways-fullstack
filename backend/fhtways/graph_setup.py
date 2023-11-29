import networkx as nx

def create_graph():
    # Create a directed graph
    G = nx.DiGraph()

    # Add nodes
    G.add_node("A")
    G.add_node("B")
    G.add_node("C")
    G.add_node("D")
    G.add_node("E")
    G.add_node("F")
    G.add_node("G")
    G.add_node("H")

    # Add directed edges with weights and descriptions
    G.add_edge("A", "B", weight=2, description="A to B")
    G.add_edge("B", "A", weight=2, description="B to A")

    G.add_edge("A", "C", weight=5, description="A to C")
    G.add_edge("C", "A", weight=5, description="C to A")

    G.add_edge("B", "C", weight=2, description="B to C")
    G.add_edge("C", "B", weight=2, description="C to B")

    G.add_edge("B", "D", weight=4, description="B to D")
    G.add_edge("D", "B", weight=4, description="D to B")

    G.add_edge("C", "D", weight=5, description="C to D")
    G.add_edge("D", "C", weight=5, description="D to C")

    G.add_edge("C", "E", weight=5, description="C to E")
    G.add_edge("E", "C", weight=5, description="E to C")

    G.add_edge("D", "E", weight=2, description="D to E")
    G.add_edge("E", "D", weight=2, description="E to D")

    G.add_edge("E", "F", weight=2, description="E to F")
    G.add_edge("F", "E", weight=2, description="F to E")

    G.add_edge("F", "G", weight=2, description="F to G")
    G.add_edge("G", "F", weight=2, description="G to F")

    return G

def find_shortest_path(graph, start_node, end_node):
    try:
        path = nx.dijkstra_path(graph, start_node, end_node)

        # List to hold the edges in the path
        path_edges = []

        # Iterate over the nodes
        for n in range(len(path) - 1):
            # Creating edges. Each edge is a tuple of two consecutive nodes
            edge = (path[n], path[n + 1])
            path_edges.append(edge)
        
        # List to hold the descriptions for the edges in the path
        descriptions = []

        for edge in path_edges:
            # retrieves the description of the edge from the starting node edge[0] to the ending node edge[1]
            description = graph[edge[0]][edge[1]]['description']
            descriptions.append(description)
        
        return path, descriptions
    
    except nx.NetworkXNoPath:
        return None, "No path exists between the specified nodes."