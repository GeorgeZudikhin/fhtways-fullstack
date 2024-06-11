import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../styles/EdgeModal.css';

function EdgeModal({ edge, nodes, onSave, onDelete, onClose }) {
    const [updatedEdge, setUpdatedEdge] = useState(edge);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedEdge(prevNode => ({ ...prevNode, [name]: value }));
    };

    const handleSave = () => {
        onSave(updatedEdge);
    };

    const handleDelete = () => {
        setShowDeleteConfirm(true);
    };

    const confirmDelete = () => {
        onDelete(edge.id);
        setShowDeleteConfirm(false);
    };

    return (
        <>
            <Modal show onHide={onClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Edge</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Start Node</Form.Label>
                            <Form.Control as="select" name="start_node" value={updatedEdge.start_node} onChange={handleChange}>
                                {nodes.map(node => (
                                    <option key={node.id} value={node.name}>{node.name}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>End Node</Form.Label>
                            <Form.Control as="select" name="end_node" value={updatedEdge.end_node} onChange={handleChange}>
                                {nodes.map(node => (
                                    <option key={node.id} value={node.name}>{node.name}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Weight</Form.Label>
                            <Form.Control type="number" name="weight" value={updatedEdge.weight} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" name="description" value={updatedEdge.description} onChange={handleChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="justify-content-between">
                    <Button variant="primary" onClick={handleSave}>Save</Button>
                    <Button variant="danger" onClick={handleDelete}>Delete</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showDeleteConfirm} onHide={() => setShowDeleteConfirm(false)} centered dialogClassName="slide-down-modal">
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this edge?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteConfirm(false)}>Cancel</Button>
                    <Button variant="outline-danger" onClick={confirmDelete}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EdgeModal;