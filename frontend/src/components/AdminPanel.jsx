import React, { useState, useEffect } from 'react';
import { Stage, Layer, Circle, Line, Image, Text } from 'react-konva';
import useImage from 'use-image';
import '../styles/AdminPanel.css';
import NodeModal from './NodeModal';
import Header from "./Header";
import EdgeModal from "./EdgeModal";

const initialNodes = [
    { id: 1, name: 'F4.25', coord_x: 8, coord_y: 2, display_x: 50, display_y: 50, type: 'room' },
    { id: 2, name: 'F4.25_c', coord_x: 8, coord_y: 0, display_x: 50, display_y: 50, type: 'corridor' },
];

const initialEdges = [
    { id: 1, start_node: 'F4.25', end_node: 'F4.25_c', weight: 5, description: 'Connection between F4.25 and F4.25_c' },
];

function AdminPanel() {
    const [nodes, setNodes] = useState(() => {
        const savedNodes = localStorage.getItem('nodes');
        return savedNodes ? JSON.parse(savedNodes) : initialNodes;
    });

    const [edges, setEdges] = useState(initialEdges);
    const [selectedNode, setSelectedNode] = useState(null);
    const [selectedEdge, setSelectedEdge] = useState(null);
    const [hoveredNode, setHoveredNode] = useState(null);
    const [hoveredEdge, setHoveredEdge] = useState(null);
    const [backgroundImage] = useImage('../assets/admin/F4.png');

    useEffect(() => {
        localStorage.setItem('nodes', JSON.stringify(nodes));
    }, [nodes]);

    useEffect(() => {
        localStorage.setItem('edges', JSON.stringify(edges));
    }, [edges]);

    const handleDragEnd = (id, x, y) => {
        setNodes(prevNodes =>
            prevNodes.map(node =>
                node.id === id ? { ...node, display_x: x, display_y: y } : node
            )
        );
    };

    const saveNodeDetails = (nodeDetails) => {
        setNodes(prevNodes => {
            const existingNode = prevNodes.find(node => node.id === nodeDetails.id);
            if (existingNode) {
                return prevNodes.map(node =>
                    node.id === nodeDetails.id ? { ...node, ...nodeDetails } : node
                );
            } else {
                return [...prevNodes, nodeDetails];
            }
        });
        setSelectedNode(null);
    };

    const handleAddNode = () => {
        setSelectedNode({ id: nodes.length + 1, name: '', coord_x: 0, coord_y: 0, display_x: 100, display_y: 100, type: '' });
    };

    const deleteNode = (nodeId) => {
        setNodes(prevNodes => prevNodes.filter(node => node.id !== nodeId));
        setSelectedNode(null);
    };

    const saveEdgeDetails = (edgeDetails) => {
        setEdges(prevEdges => {
            const existingEdge = prevEdges.find(edge => edge.id === edgeDetails.id);
            if (existingEdge) {
                return prevEdges.map(edge =>
                    edge.id === edgeDetails.id ? { ...edge, ...edgeDetails } : edge
                );
            } else {
                return [...prevEdges, edgeDetails];
            }
        });
        setSelectedEdge(null);
    };

    const handleAddEdge = () => {
        setSelectedEdge({ id: edges.length + 1, start_node: '', end_node: '', weight: 0, description: '' });
    };

    const deleteEdge = (edgeId) => {
        setEdges(prevEdges => prevEdges.filter(edge => edge.id !== edgeId));
        setSelectedEdge(null);
    };

    return (
        <div>
            <Header onAddNode={handleAddNode} onAddEdge={handleAddEdge} />
            <div className="svg-container">
                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer>
                        <Image image={backgroundImage}/>
                        {nodes.map(node => (
                            <React.Fragment key={node.id}>
                                <Circle
                                    className="node"
                                    x={node.display_x}
                                    y={node.display_y}
                                    radius={20}
                                    fill="black"
                                    draggable
                                    onClick={() => setSelectedNode(node)}
                                    onMouseEnter={() => setHoveredNode(node)}
                                    onMouseLeave={() => setHoveredNode(null)}
                                    onDragEnd={e => handleDragEnd(node.id, e.target.x(), e.target.y())}
                                    opacity={hoveredNode && hoveredNode.id === node.id ? 0.5 : 1}
                                    listening={true}
                                    onMouseOver={e => e.target.getStage().container().style.cursor = 'pointer'}
                                    onMouseOut={e => e.target.getStage().container().style.cursor = 'default'}
                                />
                                {hoveredNode && hoveredNode.id === node.id && (
                                    <Text
                                        x={node.display_x + 25}
                                        y={node.display_y}
                                        text={node.name}
                                        fontSize={15}
                                        fill="black"
                                    />
                                )}
                            </React.Fragment>
                        ))}
                        {edges.map(edge => {
                            const startNode = nodes.find(node => node.name === edge.start_node.trim());
                            const endNode = nodes.find(node => node.name === edge.end_node.trim());
                            return startNode && endNode ? (
                                <React.Fragment key={edge.id}>
                                    <Line
                                        points={[startNode.display_x, startNode.display_y, endNode.display_x, endNode.display_y]}
                                        stroke="black"
                                        strokeWidth={5}
                                        lineCap="round"
                                        lineJoin="round"
                                        onClick={() => setSelectedEdge(edge)}
                                        onMouseEnter={() => setHoveredEdge(edge)}
                                        onMouseLeave={() => setHoveredEdge(null)}
                                        opacity={hoveredEdge && hoveredEdge.id === edge.id ? 0.5 : 1}
                                        listening={true}
                                        onMouseOver={e => e.target.getStage().container().style.cursor = 'pointer'}
                                        onMouseOut={e => e.target.getStage().container().style.cursor = 'default'}
                                    />
                                </React.Fragment>
                            ) : null;
                        })}
                    </Layer>
                </Stage>
                {selectedNode && (
                    <NodeModal
                        node={selectedNode}
                        onSave={saveNodeDetails}
                        onDelete={() => deleteNode(selectedNode.id)}
                        onClose={() => setSelectedNode(null)}
                    />
                )}
                {selectedEdge && (
                    <EdgeModal
                        edge={selectedEdge}
                        nodes={nodes}
                        onSave={saveEdgeDetails}
                        onDelete={deleteEdge}
                        onClose={() => setSelectedEdge(null)}
                    />
                )}
            </div>
        </div>
    );
}

export default AdminPanel;