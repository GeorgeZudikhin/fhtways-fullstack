import React from 'react';
import '../styles/NodeModal.css';


function NodeModal({ nodeData, setNodeData, setShowDetails }) {

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h2>Edit Node Data</h2>
                <form className="modal-form">
                    <div className="form-row">
                        <label>Node ID:</label>
                        <input type="text" value={nodeData.id} readOnly />
                    </div>
                    <div className="form-row">
                        <label>Name:</label>
                        <input
                            type="text"
                            value={nodeData.name}
                            onChange={(e) => setNodeData({ ...nodeData, name: e.target.value })}
                        />
                    </div>
                    <div className="form-row">
                        <label>Coordinates:</label>
                        <div className="coordinates">
                            <input
                                type="number"
                                value={nodeData.x}
                                onChange={(e) => setNodeData({ ...nodeData, x: e.target.value })}
                            />
                            <input
                                type="number"
                                value={nodeData.y}
                                onChange={(e) => setNodeData({ ...nodeData, y: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <label>Type:</label>
                        <select
                            value={nodeData.type}
                            onChange={(e) => setNodeData({ ...nodeData, type: e.target.value })}
                        >
                            <option value="room">Room</option>
                            <option value="hallway">Hallway</option>
                            <option value="stairs">Stairs</option>
                        </select>
                    </div>
                    <div className="form-row actions">
                        <button type="button" className="save-button" onClick={() => setShowDetails(false)}>
                            Save
                        </button>
                        <button type="button" className="close-button" onClick={() => setShowDetails(false)}>
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NodeModal;
