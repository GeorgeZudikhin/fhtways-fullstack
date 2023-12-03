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
    G.add_edge("F4.27", "F4.27_c", weight=1, description="F4.27 to F4.27 corridor")
    G.add_edge("F4.27_c", "F4.27", weight=1, description="F4.27 corridor to F4.27")

    G.add_edge("F4.26", "F4.26_c", weight=1, description="F4.26 to F4.26 corridor")
    G.add_edge("F4.26_c", "F4.26", weight=1, description="F4.26 corridor to F4.26")

    G.add_edge("F4.25", "F4.25_c", weight=1, description="F4.25 to F4.25 corridor")
    G.add_edge("F4.25_c", "F4.25", weight=1, description="F4.25 corridor to F4.25")

    G.add_edge("F4.24", "F4.24_c", weight=1, description="F4.24 to F4.24 corridor")
    G.add_edge("F4.24_c", "F4.24", weight=1, description="F4.24 corridor to F4.24")

    G.add_edge("F4.23", "F4.23_c", weight=1, description="F4.23 to F4.23 corridor")
    G.add_edge("F4.23_c", "F4.23", weight=1, description="F4.23 corridor to F4.23")

    G.add_edge("F4.22", "F4.22_c", weight=1, description="F4.22 to F4.22 corridor")
    G.add_edge("F4.22_c", "F4.22", weight=1, description="F4.22 corridor to F4.22")

    G.add_edge("F4.20", "F4.20_c", weight=1, description="F4.20 to F4.20 corridor")
    G.add_edge("F4.20_c", "F4.20", weight=1, description="F4.20 corridor to F4.20")


    # Add directed edges with weights and descriptions between corridor nodes
    G.add_edge("F4.27_c", "F4.26_c", weight=2, description="F4.27 corridor to F4.26 corridor")
    G.add_edge("F4.26_c", "F4.27_c", weight=2, description="F4.26 corridor to F4.27 corridor")

    G.add_edge("F4.26_c", "F4.25_c", weight=2, description="F4.26 corridor to F4.25 corridor")
    G.add_edge("F4.25_c", "F4.26_c", weight=2, description="F4.25 corridor to F4.26 corridor")

    G.add_edge("F4.25_c", "F4.24_c", weight=2, description="F4.25 corridor to F4.24 corridor")
    G.add_edge("F4.24_c", "F4.25_c", weight=2, description="F4.24 corridor to F4.25 corridor")

    G.add_edge("F4.24_c", "F4.23_c", weight=2, description="F4.24 corridor to F4.23 corridor")
    G.add_edge("F4.23_c", "F4.24_c", weight=2, description="F4.23 corridor to F4.24 corridor")

    G.add_edge("F4.23_c", "F4.22_c", weight=2, description="F4.23 corridor to F4.22 corridor")
    G.add_edge("F4.22_c", "F4.23_c", weight=2, description="F4.22 corridor to F4.23 corridor")

    G.add_edge("F4.22_c", "F4.20_c", weight=2, description="F4.22 corridor to F4.20 corridor")
    G.add_edge("F4.20_c", "F4.22_c", weight=2, description="F4.20 corridor to F4.22 corridor")

    G.add_edge("F4.20_c", "toilet", weight=2, description="F4.20 corridor to toilet")
    G.add_edge("toilet", "F4.20_c", weight=2, description="Toilet to F4.20 corridor")

    G.add_edge("toilet", "hall", weight=2, description="Toilet to hall")
    G.add_edge("hall", "toilet", weight=2, description="Hall to toilet")

    G.add_edge("hall", "lift", weight=2, description="Hall to lift")
    G.add_edge("lift", "hall", weight=2, description="Lift to hall")

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