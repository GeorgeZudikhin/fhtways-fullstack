import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../styles/NodeModal.css';

function NodeModal({ node, onSave, onClose }) {
    const [updatedNode, setUpdatedNode] = useState(node);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedNode(prevNode => ({ ...prevNode, [name]: value }));
    };

    const handleSave = () => {
        onSave(updatedNode);
    };

    return (
        <Modal show onHide={onClose} centered className="node-modal">
            <Modal.Header closeButton>
                <Modal.Title>Edit Node</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" value={updatedNode.name} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Coordinate X</Form.Label>
                        <Form.Control type="number" name="coord_x" value={updatedNode.coord_x} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Coordinate Y</Form.Label>
                        <Form.Control type="number" name="coord_y" value={updatedNode.coord_y} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Type</Form.Label>
                        <Form.Control as="select" name="type" value={updatedNode.type} onChange={handleChange}>
                            <option value="room">room</option>
                            <option value="corridor">corridor</option>
                            <option value="toilet">toilet</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleSave}>Save</Button>
                <Button variant="secondary" onClick={onClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default NodeModal;