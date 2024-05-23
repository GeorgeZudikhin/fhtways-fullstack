import React, { useState } from 'react';
import { Stage, Layer, Rect, Circle } from 'react-konva';
import '../styles/AdminPanel.css';
import NodeModal from './NodeModal.js';


function AdminPanel() {
    const [showDetails, setShowDetails] = useState(false);
    const [nodeData, setNodeData] = useState({
        id: '1',
        name: 'F4.20_c',
        x: 23.5,
        y: 61,
        type: 'room' 
    });

    const [nodes, setNodes] = useState([
        {id: 1, name: 'F4.25', coord_x: 8, coord_y: 2, type: 'room'},
        {id: 2, name: 'F4.25_c', coord_x: 8, coord_y: 0, type: 'corridor'},
    ])

    return (
        <div className="svg-container">
            <svg width="100" height="100">
                <circle
                    className="node"
                    cx="23.5"
                    cy="61"
                    r="11.5"
                    onMouseEnter={(e) => e.target.classList.add('node-hover')}
                    onMouseLeave={(e) => e.target.classList.remove('node-hover')}
                    onClick={() => setShowDetails(true)}
                />
            </svg>

            {showDetails && (
                <NodeModal
                    nodeData={nodeData}
                    setNodeData={setNodeData}
                    setShowDetails={setShowDetails}
                />
            )}
        </div>
    );
}

export default AdminPanel;
