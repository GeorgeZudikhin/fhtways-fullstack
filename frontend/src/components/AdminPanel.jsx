import React, { useState, useEffect } from 'react';
import { Stage, Layer, Circle, Line, Image } from 'react-konva';
import useImage from 'use-image';
import '../styles/AdminPanel.css';
import NodeModal from './NodeModal';

const initialNodes = [
    { id: 1, name: 'F4.25', coord_x: 8, coord_y: 2, display_x: 50, display_y: 50, type: 'room' },
    { id: 2, name: 'F4.25_c', coord_x: 8, coord_y: 0, display_x: 50, display_y: 50, type: 'corridor' },
];

const initialEdges = [
    { id: 1, start_node: 1, end_node: 2, weight: 5, description: 'Connection between F4.25 and F4.25_c' },
];

function AdminPanel() {
    const [nodes, setNodes] = useState(() => {
        const savedNodes = localStorage.getItem('nodes');
        return savedNodes ? JSON.parse(savedNodes) : initialNodes;
    });

    const [edges] = useState(initialEdges);
    const [selectedNode, setSelectedNode] = useState(null);
    const [backgroundImage] = useImage('../assets/admin/F4.png');

    useEffect(() => {
        localStorage.setItem('nodes', JSON.stringify(nodes));
    }, [nodes]);

    const handleDragEnd = (id, x, y) => {
        setNodes(prevNodes =>
            prevNodes.map(node =>
                node.id === id ? { ...node, display_x: x, display_y: y } : node
            )
        );
    };

    const saveNodeDetails = (nodeDetails) => {
        setNodes(prevNodes =>
            prevNodes.map(node =>
                node.id === nodeDetails.id ? { ...node, ...nodeDetails } : node
            )
        );
        setSelectedNode(null);
    };

    return (
        <div className="svg-container">
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <Image image={backgroundImage}/>
                    {nodes.map(node => (
                        <Circle
                            className="node"
                            key={node.id}
                            x={node.display_x}
                            y={node.display_y}
                            radius={20}
                            fill="black"
                            draggable
                            onClick={() => setSelectedNode(node)}
                            onDragEnd={e => handleDragEnd(node.id, e.target.x(), e.target.y())}
                        />
                    ))}
                    {edges.map(edge => {
                        const startNode = nodes.find(node => node.id === edge.start_node);
                        const endNode = nodes.find(node => node.id === edge.end_node);
                        return startNode && endNode ? (
                            <Line
                                key={edge.id}
                                points={[startNode.display_x, startNode.display_y, endNode.display_x, endNode.display_y]}
                                stroke="black"
                                strokeWidth={5}
                                lineCap="round"
                                lineJoin="round"
                            />
                        ) : null;
                    })}
                </Layer>
            </Stage>
            {selectedNode && (
                <div className="modal-backdrop">
                    <NodeModal
                        node={selectedNode}
                        onSave={saveNodeDetails}
                        onClose={() => setSelectedNode(null)}
                    />
                </div>
            )}
        </div>
    );
}

export default AdminPanel;