import { Fragment, useEffect, useState } from "react";
import { Stage, Layer, Circle, Line, Image, Text } from "react-konva";
import useImage from "use-image";
import NodeModal from "../components/NodeModal";
import EdgeModal from "../components/EdgeModal";
import AdminHeader from "../components/AdminHeader";
import F4Image from "../assets/F4.png";
import { Node, allNodes } from "../types/temporaryAllNodes";
import { Edge, allEdges } from "../types/temporaryAllEdges";

export default function AdminPanel() {
    const [nodes, setNodes] = useState<Node[]>(() => {
        const savedNodes = localStorage.getItem("nodes");
        return savedNodes ? JSON.parse(savedNodes) : allNodes;
    });

    const [edges, setEdges] = useState<Edge[]>(allEdges);
    const [selectedNode, setSelectedNode] = useState<Node | null>(null);
    const [selectedEdge, setSelectedEdge] = useState<Edge | null>(null);
    const [hoveredNode, setHoveredNode] = useState<Node | null>(null);
    const [hoveredEdge, setHoveredEdge] = useState<Edge | null>(null);
    const [backgroundImage] = useImage(F4Image);

    const [imageScale, setImageScale] = useState({ x: 1, y: 1 });

    useEffect(() => {
        if (backgroundImage) {
            const imageWidth = backgroundImage.width;
            const imageHeight = backgroundImage.height;
            const canvasWidth = window.innerWidth;
            const canvasHeight = window.innerHeight;

            const scaleX = canvasWidth / imageWidth;
            const scaleY = canvasHeight / imageHeight;

            const scale = Math.min(scaleX, scaleY);
            setImageScale({ x: scale, y: scale });
        }
    }, [backgroundImage]);

    useEffect(() => {
        localStorage.setItem("nodes", JSON.stringify(nodes));
    }, [nodes]);

    useEffect(() => {
        localStorage.setItem("edges", JSON.stringify(edges));
    }, [edges]);

    const handleDragEnd = (id: number, x: number, y: number) => {
        setNodes((prevNodes) =>
            prevNodes.map((node) =>
                node.id === id ? { ...node, display_x: x, display_y: y } : node,
            ),
        );
    };

    const saveNodeDetails = (nodeDetails: Node) => {
        setNodes((prevNodes) => {
            const existingNode = prevNodes.find(
                (node) => node.id === nodeDetails.id,
            );
            if (existingNode) {
                return prevNodes.map((node) =>
                    node.id === nodeDetails.id
                        ? { ...node, ...nodeDetails }
                        : node,
                );
            } else {
                return [
                    ...prevNodes,
                    {
                        ...nodeDetails,
                        display_x: nodeDetails.display_x || 0,
                        display_y: nodeDetails.display_y || 0,
                    },
                ];
            }
        });
        setSelectedNode(null);
    };

    const handleAddNode = () => {
        setSelectedNode({
            id: nodes.length + 1,
            name: "",
            coord_x: 0,
            coord_y: 0,
            display_x: 100,
            display_y: 100,
            type: "",
        });
    };

    const deleteNode = (nodeId: number) => {
        setNodes((prevNodes) => prevNodes.filter((node) => node.id !== nodeId));
        setSelectedNode(null);
    };

    const saveEdgeDetails = (edgeDetails: Edge) => {
        setEdges((prevEdges) => {
            const existingEdge = prevEdges.find(
                (edge) => edge.id === edgeDetails.id,
            );
            if (existingEdge) {
                return prevEdges.map((edge) =>
                    edge.id === edgeDetails.id
                        ? { ...edge, ...edgeDetails }
                        : edge,
                );
            } else {
                return [...prevEdges, edgeDetails];
            }
        });
        setSelectedEdge(null);
    };

    const handleAddEdge = () => {
        setSelectedEdge({
            id: edges.length + 1,
            start_node: "",
            end_node: "",
            weight: 0,
            description: "",
        });
    };

    const handleEdgeDelete = (edgeId: number) => {
        setEdges((prevEdges) => prevEdges.filter((edge) => edge.id !== edgeId));
        setSelectedEdge(null);
    };

    return (
        <div>
            <AdminHeader onAddNode={handleAddNode} onAddEdge={handleAddEdge} />
            <div
                style={{ position: "relative", width: "100%", height: "100vh" }}
            >
                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer>
                        {backgroundImage && (
                            <Image
                                image={backgroundImage}
                                x={0}
                                y={0}
                                scale={imageScale}
                            />
                        )}
                        {nodes.map((node) => (
                            <Fragment key={node.id}>
                                <Circle
                                    x={node.display_x}
                                    y={node.display_y}
                                    radius={16}
                                    fill="black"
                                    draggable
                                    onClick={() => setSelectedNode(node)}
                                    onMouseEnter={() => setHoveredNode(node)}
                                    onMouseLeave={() => setHoveredNode(null)}
                                    onDragEnd={(e) =>
                                        handleDragEnd(
                                            node.id,
                                            e.target.x(),
                                            e.target.y(),
                                        )
                                    }
                                    opacity={
                                        hoveredNode &&
                                        hoveredNode.id === node.id
                                            ? 0.5
                                            : 1
                                    }
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
                            </Fragment>
                        ))}
                        {edges.map((edge) => {
                            const startNode = nodes.find(
                                (node) => node.name === edge.start_node.trim(),
                            );
                            const endNode = nodes.find(
                                (node) => node.name === edge.end_node.trim(),
                            );
                            return startNode && endNode ? (
                                <Line
                                    key={edge.id}
                                    points={[
                                        startNode.display_x,
                                        startNode.display_y,
                                        endNode.display_x,
                                        endNode.display_y,
                                    ]}
                                    stroke={
                                        hoveredEdge &&
                                        hoveredEdge.id === edge.id
                                            ? "blue"
                                            : "black"
                                    }
                                    strokeWidth={5}
                                    onMouseEnter={() => setHoveredEdge(edge)}
                                    onMouseLeave={() => setHoveredEdge(null)}
                                    onClick={() => setSelectedEdge(edge)}
                                />
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
                        onDelete={handleEdgeDelete}
                        onClose={() => setSelectedEdge(null)}
                    />
                )}
            </div>
        </div>
    );
}
