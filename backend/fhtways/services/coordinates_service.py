def transform_coordinates(nodes, scale_factor_x, scale_factor_y, offset_x, offset_y):
    transformed_nodes = []
    for node in nodes:
        transformed_node = node.copy()
        transformed_node["display_x"] = node["coord_x"] * scale_factor_x + offset_x
        transformed_node["display_y"] = node["coord_y"] * scale_factor_y + offset_y
        transformed_nodes.append(transformed_node)
    return transformed_nodes