import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../styles/EdgeModal.css';

function EdgeModal({ edge, onSave, onClose }) {
    const [updatedEdge, setUpdatedEdge] = useState(edge);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedEdge(prevNode => ({ ...prevNode, [name]: value }));
    };

    const handleSave = () => {
        onSave(updatedEdge);
    };

    return (
        <Modal show onHide={onClose} centered>
            <Modal.Header>
                <Modal.Title>Edit Edge</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Start Node</Form.Label>
                        <Form.Control as="select" name="type" value={updatedEdge.start_node} onChange={handleChange}>
                            <option value="room">room</option>
                            <option value="corridor">corridor</option>
                            <option value="toilet">toilet</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>End Node</Form.Label>
                        <Form.Control as="select" name="type" value={updatedEdge.end_node} onChange={handleChange}>
                            <option value="room">room</option>
                            <option value="corridor">corridor</option>
                            <option value="toilet">toilet</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Weight</Form.Label>
                        <Form.Control type="number" name="coord_x" value={updatedEdge.weight} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="name" value={updatedEdge.description} onChange={handleChange} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleSave}>Save Changes</Button>
                <Button variant="secondary" onClick={onClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EdgeModal;