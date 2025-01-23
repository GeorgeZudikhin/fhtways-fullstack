import React, { useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Typography,
    SelectChangeEvent,
} from "@mui/material";

interface Node {
    id: number;
    name: string;
}

interface Edge {
    id: number;
    start_node: string;
    end_node: string;
    weight: number;
    description: string;
}

interface EdgeModalProps {
    edge: Edge;
    nodes: Node[];
    onSave: (updatedEdge: Edge) => void;
    onDelete: (id: number) => void;
    onClose: () => void;
}

export default function EdgeModal({
    edge,
    nodes,
    onSave,
    onDelete,
    onClose,
}: Readonly<EdgeModalProps>) {
    const [updatedEdge, setUpdatedEdge] = useState<Edge>(edge);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    const handleChange = (
        e:
            | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            | SelectChangeEvent<string>,
    ) => {
        const { name, value } = e.target;
        setUpdatedEdge((prevEdge) => ({
            ...prevEdge,
            [name]: value,
        }));
    };

    const handleSave = () => onSave(updatedEdge);

    return (
        <>
            <Dialog open onClose={onClose} fullWidth>
                <DialogTitle>Edit Edge</DialogTitle>
                <DialogContent>
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Start Node</InputLabel>
                        <Select
                            name="start_node"
                            value={updatedEdge.start_node}
                            onChange={handleChange}
                        >
                            {nodes.map((node) => (
                                <MenuItem key={node.id} value={node.name}>
                                    {node.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <InputLabel>End Node</InputLabel>
                        <Select
                            name="end_node"
                            value={updatedEdge.end_node}
                            onChange={(e) => handleChange(e)}
                        >
                            {nodes.map((node) => (
                                <MenuItem key={node.id} value={node.name}>
                                    {node.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        fullWidth
                        margin="normal"
                        type="number"
                        label="Weight"
                        name="weight"
                        value={updatedEdge.weight}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Description"
                        name="description"
                        value={updatedEdge.description}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={handleSave}
                    >
                        Save
                    </Button>
                    <Button
                        color="error"
                        variant="outlined"
                        onClick={() => setShowDeleteConfirm(true)}
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={showDeleteConfirm}
                onClose={() => setShowDeleteConfirm(false)}
                fullWidth
            >
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                    <Typography>
                        Are you sure you want to delete this edge?
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => setShowDeleteConfirm(false)}
                        color="secondary"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={() => onDelete(updatedEdge.id)}
                        color="error"
                        variant="contained"
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
