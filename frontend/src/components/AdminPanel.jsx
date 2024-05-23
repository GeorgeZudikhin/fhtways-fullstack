import React, { useState } from 'react';
import { Stage, Layer, Circle, Line, Image } from 'react-konva';
import useImage from 'use-image';
import '../styles/AdminPanel.css';
import NodeModal from './NodeModal';


function AdminPanel() {
    const [nodes, setNodes] = useState(() => {
        const savedNodes = localStorage.getItem('nodes');
        return savedNodes ? JSON.parse(savedNodes) : [
            {id: 1, name: 'F4.25', coord_x: 8, coord_y: 2, display_x: 50, display_y: 50, type: 'room'},
            {id: 2, name: 'F4.25_c', coord_x: 8, coord_y: 0, display_x: 50, display_y: 50, type: 'corridor'},
        ];
    });

    const [edges, setEdges] = useState([
        {id: 1, start_node: 1, end_node: 2, weight: 5, description: 'Connection between F4.25 and F4.25_c'}
    ]);

    const [selectedNode, setSelectedNode] = useState(null);

    const [backgroundImage] = useImage('../assets/admin/F4.png');

    const handleDragEnd = (id, x, y) => {
        const updatedNodes = nodes.map(node => {
            if (node.id === id) {
                return { ...node, display_x: x, display_y: y };
            }
            return node;
        });
        setNodes(updatedNodes);
        localStorage.setItem('nodes', JSON.stringify(updatedNodes));
    };

    const saveNodeDetails = (nodeDetails) => {
        const updatedNodes = nodes.map(node => node.id === nodeDetails.id ? { ...node, ...nodeDetails } : node);
        setNodes(updatedNodes);
        localStorage.setItem('nodes', JSON.stringify(updatedNodes));
        setSelectedNode(null);
    };

    return (
        <div className={`svg-container ${selectedNode ? "darkened-background" : ""}`}>
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <Image image={backgroundImage}/>
                    {nodes.map((node) => (
                        <Circle
                            className="node"
                            key={node.id}
                            x={node.display_x}
                            y={node.display_y}
                            radius={20}
                            fill="black"
                            draggable
                            onClick={() => setSelectedNode(node)}
                            onDragEnd={(e) => handleDragEnd(node.id, e.target.x(), e.target.y())}
                        />
                    ))}
                    {edges.map((edge) => {
                        const startNode = nodes.find(node => node.id === edge.start_node);
                        const endNode = nodes.find(node => node.id === edge.end_node);
                        return (
                            <Line
                                key={edge.id}
                                points={[startNode.display_x, startNode.display_y, endNode.display_x, endNode.display_y]}
                                stroke="black"
                                strokeWidth={2}
                                lineCap="round"
                                lineJoin="round"
                            />
                        );
                    })}
                </Layer>
            </Stage>
            {selectedNode &&
                <NodeModal node={selectedNode} onSave={saveNodeDetails} onClose={() => setSelectedNode(null)}/>}
        </div>
    );
}

export default AdminPanel;
