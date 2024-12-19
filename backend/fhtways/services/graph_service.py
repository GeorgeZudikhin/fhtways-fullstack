import networkx as nx
import math
from fhtways.models import Node, Edge

class GraphService:
    def __init__(self):
        self.graph = self.create_graph_from_db()

    def create_graph_from_db(self):
        G = nx.DiGraph()

        nodes = Node.objects.all()
        for node in nodes:
            G.add_node(node.name, coord=(node.coord_x, node.coord_y), type=node.node_type)

        edges = Edge.objects.select_related('from_node', 'to_node')
        for edge in edges:
            G.add_edge(
                edge.from_node.name,
                edge.to_node.name,
                weight=int(round(edge.weight)),
                description=edge.description
            )

        return G

    def calculate_turn_direction(self, angle1, angle2):
        angle1 = angle1 % 360
        angle2 = angle2 % 360
        
        angle_diff = (angle2 - angle1 + 180) % 360 - 180 

        if angle_diff == 90 or angle_diff == -270:
            return 'links'
        elif angle_diff == -90 or angle_diff == 270:
            return 'rechts'
        elif angle_diff == 0 or angle_diff == 180 or angle_diff == -180:
            return None
        else:
            return None

    def calculate_angles(self, prev_node, current_node, next_node):
        try:
            node_data1 = self.graph.nodes[prev_node] if prev_node else graph.nodes[current_node]
            node_data2 = self.graph.nodes[current_node]
            node_data3 = self.graph.nodes[next_node] if next_node else None
        except KeyError as e:
            return None

        coord1 = node_data1.get('coord') 
        coord2 = node_data2.get('coord')
        coord3 = node_data3.get('coord') if node_data3 else None

        if not coord3:
            return ''

        vector_in = (coord2[0] - coord1[0], coord2[1] - coord1[1])
        vector_out = (coord3[0] - coord2[0], coord3[1] - coord2[1])
        
        angle_in = math.atan2(vector_in[1], vector_in[0])
        angle_out = math.atan2(vector_out[1], vector_out[0])
        
        return self.calculate_turn_direction(math.degrees(angle_in), math.degrees(angle_out))


    def find_shortest_path(self, start_node, end_node):
        try:
            path = nx.dijkstra_path(self.graph, start_node, end_node)
            path_edges = [(path[n], path[n + 1]) for n in range(len(path) - 1)]
            descriptions = []
            accumulated_distance = 0
            accumulated_nodes = 0

            for i, edge in enumerate(path_edges):
                current_node, next_node = edge
                prev_node = path[i - 1] if i > 0 else current_node
                edge_data = self.graph[current_node][next_node]

                if i == 0:
                    descriptions.append(edge_data['description'])
                    continue

                turn = self.calculate_angles(prev_node, current_node, next_node)

                if (self.graph.nodes[current_node]['type'] == 'corridor' and self.graph.nodes[next_node]['type'] == 'corridor' or 
                    self.graph.nodes[current_node]['type'] == 'conn' and self.graph.nodes[next_node]['type'] == 'corridor'):
                    accumulated_distance += edge_data['weight']
                    accumulated_nodes += 1
                    
                    if turn:
                        descriptions.append(f"Biege um 90 Grad {turn} ab. ")

                else:
                    if accumulated_distance:
                        descriptions.append(f"Gehe geradeaus {accumulated_distance} Schritte im Korridor. Orientiere dich an den Zimmern auf deiner rechten Seite: du wirst an {accumulated_nodes} Zimmern vorbeigehen. ")
                        accumulated_distance = 0
                        accumulated_nodes = 0

                    if turn:
                        descriptions.append(f"Biege um 90 Grad {turn} ab. ")
            
                    descriptions.append(edge_data['description'])

            return path, descriptions
        
        except nx.NetworkXNoPath:
            return None, "No path exists between the specified nodes: " + start_node + " and " + end_node