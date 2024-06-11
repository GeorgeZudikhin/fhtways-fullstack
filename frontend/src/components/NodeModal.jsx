import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../styles/NodeModal.css';

function NodeModal({ node, onSave, onDelete, onClose }) {
    const [updatedNode, setUpdatedNode] = useState(node);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedNode(prevNode => ({ ...prevNode, [name]: value }));
    };

    const handleSave = () => {
        onSave(updatedNode);
    };

    const handleDelete = () => {
        setShowDeleteConfirm(true);
    };

    const confirmDelete = () => {
        onDelete(node.id);
        setShowDeleteConfirm(false);
    };

    return (
        <>
            <Modal show onHide={onClose} centered>
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
                <Modal.Footer className="justify-content-between">
                    <Button variant="primary" onClick={handleSave}>Save</Button>
                    <Button variant="outline-danger" onClick={handleDelete}>Delete</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showDeleteConfirm} onHide={() => setShowDeleteConfirm(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this node? This action will delete all edges connected to this node.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteConfirm(false)}>Cancel</Button>
                    <Button variant="danger" onClick={confirmDelete}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default NodeModal;