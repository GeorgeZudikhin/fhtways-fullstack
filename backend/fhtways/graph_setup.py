import networkx as nx

def create_graph():
    # Create a directed graph
    G = nx.DiGraph()

    # Add nodes
    G.add_node("F4.27",         type="room")
    G.add_node("F4.27_c",       type="corridor")

    G.add_node("F4.26",         type="room")
    G.add_node("F4.26_c",       type="corridor")

    G.add_node("F4.25",         type="room")
    G.add_node("F4.25_c",       type="corridor")

    G.add_node("F4.24",         type="room")
    G.add_node("F4.24_c",       type="corridor")

    G.add_node("F4.23",         type="room")
    G.add_node("F4.23_c",       type="corridor")

    G.add_node("F4.22",         type="room")
    G.add_node("F4.22_c",       type="corridor")

    G.add_node("F4.20",         type="room")
    G.add_node("F4.20_c",       type="corridor")

    G.add_node("F4.01",         type="room")
    G.add_node("F4.08",         type="room")
    G.add_node("F4.01_F4.08_c", type="corridor")

    G.add_node("F4.02",         type="room")
    G.add_node("F4.07",         type="room")
    G.add_node("F4.02_F4.07_c", type="corridor")

    G.add_node("F4.03",         type="room")
    G.add_node("F4.06",         type="room")
    G.add_node("F4.03_F4.06_c", type="corridor")

    G.add_node("F4.04",         type="room")
    G.add_node("F4.05",         type="room")
    G.add_node("F4.04_F4.05_c", type="corridor")

    G.add_node("toilet",             type="wc")
    G.add_node("stairs_left",        type="stairs")
    G.add_node("stairs_middle",      type="stairs")
    G.add_node("stairs_rigth",       type="stairs")
    G.add_node("stairs_rigth_conn",  type="conn")
    G.add_node("lift",               type="lift")

    # Add directed edges with weights and descriptions between rooms and their respective corridor nodes
    G.add_edge("F4.27", "F4.27_c", weight=3, description="Öffnen Sie die Tür, verlassen Sie den Raum F4.27, gehen Sie 3 Schritte geradaus, um den Korridor zu erreichen.")
    G.add_edge("F4.27_c", "F4.27", weight=3, description="gehen Sie 3 Schritte geradeaus, öffnen Sie die Tür, um den Raum F4.27 zu erreichen.")

    G.add_edge("F4.26", "F4.26_c", weight=2, description="Öffnen Sie die Tür, verlassen Sie den Raum F4.26, gehen Sie 2 Schritte geradaus, um den Korridor zu erreichen.")
    G.add_edge("F4.26_c", "F4.26", weight=2, description="gehen Sie 2 Schritte geradeaus, öffnen Sie die Tür, um den Raum F4.26 zu erreichen.")

    G.add_edge("F4.25", "F4.25_c", weight=2, description="Öffnen Sie die Tür, verlassen Sie den Raum F4.25, gehen Sie 2 Schritte geradaus, um den Korridor zu erreichen.")
    G.add_edge("F4.25_c", "F4.25", weight=2, description="gehen Sie 2 Schritte geradeaus, öffnen Sie die Tür, um den Raum F4.25 zu erreichen.")

    G.add_edge("F4.24", "F4.24_c", weight=2, description="Öffnen Sie die Tür, verlassen Sie den Raum F4.24, gehen Sie 2 Schritte geradaus, um den Korridor zu erreichen.")
    G.add_edge("F4.24_c", "F4.24", weight=2, description="gehen Sie 2 Schritte geradeaus, öffnen Sie die Tür, um den Raum F4.24 zu erreichen.")

    G.add_edge("F4.23", "F4.23_c", weight=2, description="Öffnen Sie die Tür, verlassen Sie den Raum F4.23, gehen Sie 2 Schritte geradaus, um den Korridor zu erreichen.")
    G.add_edge("F4.23_c", "F4.23", weight=2, description="gehen Sie 2 Schritte geradeaus, öffnen Sie die Tür, um den Raum F4.23 zu erreichen.")

    G.add_edge("F4.22", "F4.22_c", weight=2, description="Öffnen Sie die Tür, verlassen Sie den Raum F4.22, gehen Sie 2 Schritte geradaus, um den Korridor zu erreichen.")
    G.add_edge("F4.22_c", "F4.22", weight=2, description="gehen Sie 2 Schritte geradeaus, öffnen Sie die Tür, um den Raum F4.22 zu erreichen.")

    G.add_edge("F4.20", "F4.20_c", weight=2, description="Öffnen Sie die Tür, verlassen Sie den Raum F4.20, gehen Sie 2 Schritte geradaus, um den Korridor zu erreichen.")
    G.add_edge("F4.20_c", "F4.20", weight=2, description="gehen Sie 2 Schritte geradeaus, öffnen Sie die Tür, um den Raum F4.21 zu erreichen.")

    G.add_edge("F4.08", "F4.01_F4.08_c", weight=2, description="Öffnen Sie die Tür, verlassen Sie den Raum F4.08, gehen Sie 2 Schritte geradaus, um den Korridor zu erreichen.")
    G.add_edge("F4.01_F4.08_c", "F4.08", weight=2, description="gehen Sie 2 Schritte geradeaus, öffnen Sie die Tür, um den Raum F4.08 zu erreichen.")

    G.add_edge("F4.07", "F4.02_F4.07_c", weight=2, description="Öffnen Sie die Tür, verlassen Sie den Raum F4.07, gehen Sie 2 Schritte geradaus, um den Korridor zu erreichen.")
    G.add_edge("F4.02_F4.07_c", "F4.07", weight=2, description="gehen Sie 2 Schritte geradeaus, öffnen Sie die Tür, um den Raum F4.07 zu erreichen.")

    G.add_edge("F4.06", "F4.03_F4.06_c", weight=2, description="Öffnen Sie die Tür, verlassen Sie den Raum F4.06, gehen Sie 2 Schritte geradaus, um den Korridor zu erreichen.")
    G.add_edge("F4.03_F4.06_c", "F4.06", weight=2, description="gehen Sie 2 Schritte geradeaus, öffnen Sie die Tür, um den Raum F4.06 zu erreichen.")

    G.add_edge("F4.05", "F4.04_F4.05_c", weight=3, description="Öffnen Sie die Tür, verlassen Sie den Raum F4.05, gehen Sie 3 Schritte geradaus, um den Korridor zu erreichen.")
    G.add_edge("F4.04_F4.05_c", "F4.05", weight=3, description="gehen Sie 3 Schritte geradeaus, öffnen Sie die Tür, um den Raum F4.05 zu erreichen.")

    G.add_edge("F4.04", "F4.04_F4.05_c", weight=3, description="Öffnen Sie die Tür, verlassen Sie den Raum F4.04, gehen Sie 3 Schritte geradaus, um den Korridor zu erreichen.")
    G.add_edge("F4.04_F4.05_c", "F4.04", weight=3, description="gehen Sie 3 Schritte geradeaus, öffnen Sie die Tür, um den Raum F4.04 zu erreichen.")

    G.add_edge("F4.03", "F4.03_F4.06_c", weight=2, description="Öffnen Sie die Tür, verlassen Sie den Raum F4.03, gehen Sie 2 Schritte geradaus, um den Korridor zu erreichen.")
    G.add_edge("F4.03_F4.06_c", "F4.03", weight=2, description="gehen Sie 2 Schritte geradeaus, öffnen Sie die Tür, um den Raum F4.03 zu erreichen.")

    G.add_edge("F4.02", "F4.02_F4.07_c", weight=2, description="Öffnen Sie die Tür, verlassen Sie den Raum F4.02, gehen Sie 2 Schritte geradaus, um den Korridor zu erreichen.")
    G.add_edge("F4.02_F4.07_c", "F4.02", weight=2, description="gehen Sie 2 Schritte geradeaus, öffnen Sie die Tür, um den Raum F4.02 zu erreichen.")

    G.add_edge("F4.01", "F4.01_F4.08_c", weight=2, description="Öffnen Sie die Tür, verlassen Sie den Raum F4.01, gehen Sie 2 Schritte geradaus, um den Korridor zu erreichen,.")
    G.add_edge("F4.01_F4.08_c", "F4.01", weight=2, description="gehen Sie 2 Schritte geradeaus, öffnen Sie die Tür, um den Raum F4.01 zu erreichen.")


    # Add directed edges with weights and descriptions between corridor nodes
    G.add_edge("stairs_left", "F4.27_c", weight=7, description="Öffnen Sie die Tür und Sie erreichen den Korridor. Biegen Sie dann nach rechts ab und machen Sie 4 Schritte geradeaus. Biegen Sie dann nach links ab und gehen Sie noch 3 Schritte geradeaus weiter.")
    G.add_edge("F4.27_c", "stairs_left", weight=7, description="Gehen Sie 3 Schritte geradeaus, biegen Sie dann nach rechts ab und gehen Sie geradeaus weiter bis zum Ende des Ganges. Die Tür, die zu den Treppen führt, liegt dann auf der linken Seite.")

    G.add_edge("F4.27_c", "F4.26_c", weight=2, description="Gehen Sie 2 Schritte geradeaus im Korridor.")
    G.add_edge("F4.26_c", "F4.27_c", weight=2, description="Gehen Sie 2 Schritte geradeaus im Korridor.")

    G.add_edge("F4.26_c", "F4.25_c", weight=2, description="Gehen Sie 2 Schritte geradeaus im Korridor.")
    G.add_edge("F4.25_c", "F4.26_c", weight=2, description="Gehen Sie 2 Schritte geradeaus im Korridor.")

    G.add_edge("F4.25_c", "F4.24_c", weight=2, description="Gehen Sie 2 Schritte geradeaus im Korridor.")
    G.add_edge("F4.24_c", "F4.25_c", weight=2, description="Gehen Sie 2 Schritte geradeaus im Korridor.")

    G.add_edge("F4.24_c", "F4.23_c", weight=2, description="Gehen Sie 2 Schritte geradeaus im Korridor.")
    G.add_edge("F4.23_c", "F4.24_c", weight=2, description="Gehen Sie 2 Schritte geradeaus im Korridor.")

    G.add_edge("F4.23_c", "F4.22_c", weight=2, description="Gehen Sie 2 Schritte geradeaus im Korridor.")
    G.add_edge("F4.22_c", "F4.23_c", weight=2, description="Gehen Sie 2 Schritte geradeaus im Korridor.")

    G.add_edge("F4.22_c", "F4.20_c", weight=2, description="Gehen Sie 2 Schritte geradeaus im Korridor, biegen Sie dann links ab, gehen Sie weitere 2 Schritte und biegen Sie rechts ab.")
    G.add_edge("F4.20_c", "F4.22_c", weight=2, description="Beginnen Sie mit zwei Schritten geradeaus im Korridor, biegen Sie dann links ab, gehen Sie weitere 2 Schritte und biegen Sie rechts ab.")

    G.add_edge("F4.20_c", "toilet", weight=2, description="Gehen Sie den Korridor geradeaus weiter entlang, öffnen Sie die Tür vor Ihnen, biegen Sie gleich nach rechts ab und machen Sie 2 Schritte. Öffnen Sie die Tür und Sie erreichen die Toilette.")
    G.add_edge("toilet", "F4.20_c", weight=2, description="Öffnen Sie die Tür der Toilette, machen Sie 2 Schritte geradaus, biegen Sie nach links ab. Öffnen Sie die Tür vor Ihnen und gehen Sie geradeaus.")

    G.add_edge("toilet", "stairs-middle", weight=4, description="Öffnen Sie die Toilettentür, machen Sie 2 Schritte geradaus, biegen Sie nach rechts ab und machen Sie 2 Schritte geradeaus. Biegen Sie nach links ab und Sie erreichen die Stiegen des 4.Stocks.")
    G.add_edge("stairs-middle", "toilet", weight=4, description="Nachdem Sie den 4.Stock erreicht haben, gehen Sie geradeaus, indem Sie 2 Schritte machen und nach recht abbiegen. Danach machen Sie 2 Schritte geradeaus und biegen Sie demnächst nach links ab. Öffnen Sie die Tür vor Ihnen und Sie erreichen die Toilette.")

    G.add_edge("toilet", "lift", weight=4, description="Öffnen Sie die Toilettentür, machen Sie 2 Schritte geradaus, biegen Sie nach rechts ab und machen Sie 2 Schritte geradeaus. Biegen Sie nach rechts ab und Sie erreichen die Lifte.")
    G.add_edge("lift", "toilet", weight=4, description="Verlassen Sie den Lift, indem Sie 2 Schritte geradeaus machen und nach limks abbiegen. Danach machen Sie 2 Schritte geradeaus und biegen Sie demnächst nach links ab. Öffnen Sie die Tür vor Ihnen und Sie erreichen die Toilette.")

    G.add_edge("F4.20_c", "lift", weight=8, description="Gehen Sie den Korridor geradeaus weiter entlang, öffnen Sie die Tür vor Ihnen und machen Sie 5 Schritte geradeaus. Danach biegen Sie nach rechts ab, machen Sie 2 Schritte und Sie erreichen die 4 Lifte.")
    G.add_edge("lift", "F4.20_c", weight=8, description="Verlassen Sie den Lift, indem Sie 2 Schritte geradeaus machen. Danach biegen Sie nach links ab und gehen Sie geradeaus bis Sie die Tür vor Ihnen öffnen und nochmals 2 Schritte machen.")

    G.add_edge("lift", "stairs-middle", weight=2, description="Öffnen Sie die Toilettentür, machen Sie 2 Schritte geradaus und Sie erreichen die Stiegen des 4.Stocks.")
    G.add_edge("stairs-middle", "lift", weight=2, description="Nachdem Sie den 4.Stock erreicht haben, gehen Sie geradeaus, indem Sie 2 Schritte machen. Öffnen Sie die Tür vor Ihnen und Sie erreichen die Toilette.")


    G.add_edge("F4.01_F4.08_c", "stairs_middle", weight=9, description="Gehen Sie den Korridor 2 Schritte geradeaus weiter und sie erreichen die Tür, die in die Halle des 4.Stocks führt. Gehen Sie 5 Schritte geradeaus und biegen Sie nach rechts ab. Gehen Sie noch 2 Schritte nach vorne und Sie erreichen die Stiegen.")
    G.add_edge("stairs_middle", "F4.01_F4.08_c", weight=9, description="Nachdem Sie die 4.Etage erreicht haben, gehen Sie 2 Schritte geradeaus und biegen Sie demnächt nach links ab. Gehen Sie geradeaus weiter, bis sie die Türe vor ihnen erreichen, diese öffnen und noch 2 Schritte geradeaus machen.")

    G.add_edge("F4.01_F4.08_c", "toilets", weight=11, description="Gehen Sie den Korridor 2 Schritte geradeaus weiter und sie erreichen die Tür, die in die Halle des 4.Stocks führt. Gehen Sie noch 7 Schritte geradeaus weiter und biegen Sie danach nach links ab. Gehen Sie geradeaus und Sie erreichen die Toilette.")
    G.add_edge("toilets", "F4.01_F4.08_c", weight=11, description="Nachdem Sie die Toilettentür geöffnet haben, gehen Sie 2 Schritte geradeaus und biegen Sie demnächt nach rechts ab. Gehen Sie geradeaus weiter, bis sie die Türe vor ihnen erreichen, diese öffnen und noch 2 Schritte geradeaus machen.")

    G.add_edge("F4.01_F4.08_c", "F4.02_F4.07_c", weight=3, description="Gehen Sie den Korridor 2 Schritte geradeaus weiter.")
    G.add_edge("F4.02_F4.07_c", "F4.01_F4.08_c", weight=3, description="Gehen Sie den Korridor 2 Schritte geradeaus weiter.")

    G.add_edge("F4.02_F4.07_c", "F4.03_F4.06_c", weight=3, description="Gehen Sie den Korridor 2 Schritte geradeaus weiter entlang.")
    G.add_edge("F4.03_F4.06_c", "F4.02_F4.07_c", weight=3, description="Gehen Sie den Korridor 2 Schritte geradeaus weiter entlang.")

    G.add_edge("F4.03_F4.06_c", "F4.04_F4.05_c", weight=3, description="Gehen Sie den Korridor 2 Schritte geradeaus weiter entlang.")
    G.add_edge("F4.04_F4.05_c", "F4.03_F4.06_c", weight=3, description="Gehen Sie den Korridor 2 Schritte geradeaus weiter entlang.")

    G.add_edge("F4.04_F4.05_c", "stairs_right_conn", weight=2, description="Gehen Sie im Korridor zwei Schritte geradeaus. Sie werden eine Wand spüren, an der Sie sich orientieren können.")
    G.add_edge("stairs_right_conn", "F4.04_F4.05_c", weight=2, description="Gehen Sie im Korridor zwei Schritte geradeaus.")

    G.add_edge("stairs_right_conn", "stairs_right", weight=6, description="Zählen Sie 6 Schritte, bis Sie das Ende des Korridors erreichen. Hier finden Sie eine Tür auf Ihrer rechten Seite. Fühlen Sie nach dem Türgriff, um die Tür zu öffnen und die Stiegen zu erreichen.")
    G.add_edge("stairs_right", "stairs_right_conn", weight=6, description="Öffnen Sie die Tür vor Ihnen, um in den Korridor der 4. Etage zu gelangen, und biegen Sie unmittelbar links ab. Gehen Sie den Korridor 6 Schritte geradeaus weiter, bis Sie spüren, dass die Wand auf Ihrer linken Seite endet. Dies zeigt das Auftreten eines neuen Korridors auf Ihrer rechten Seite an.")
    
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
                    descriptions.append(f"Gehen Sie geradeaus {accumulated_distance} Schritte im Korridor, vorbei an {accumulated_nodes} Zimmern")
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