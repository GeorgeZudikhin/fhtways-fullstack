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
import { Node } from "../types/temporaryAllNodes";

interface NodeModalProps {
    node: Node;
    onSave: (updatedNode: Node) => void;
    onDelete: (id: number) => void;
    onClose: () => void;
}

export default function NodeModal({
    node,
    onSave,
    onDelete,
    onClose,
}: Readonly<NodeModalProps>) {
    const [updatedNode, setUpdatedNode] = useState<Node>(node);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    const handleChange = (
        e:
            | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            | SelectChangeEvent<string>,
    ) => {
        const { name, value } = e.target;
        setUpdatedNode((prevNode) => ({ ...prevNode, [name]: value }));
    };

    const handleSave = () => onSave(updatedNode);

    return (
        <>
            <Dialog open onClose={onClose} fullWidth>
                <DialogTitle>Edit Node</DialogTitle>
                <DialogContent>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Name"
                        name="name"
                        value={updatedNode.name}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        type="number"
                        label="Coordinate X"
                        name="coord_x"
                        value={updatedNode.coord_x}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        type="number"
                        label="Coordinate Y"
                        name="coord_y"
                        value={updatedNode.coord_y}
                        onChange={handleChange}
                    />
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Type</InputLabel>
                        <Select
                            name="type"
                            value={updatedNode.type}
                            onChange={(e) => handleChange(e)}
                        >
                            <MenuItem value="room">Room</MenuItem>
                            <MenuItem value="corridor">Corridor</MenuItem>
                            <MenuItem value="toilet">Toilet</MenuItem>
                            <MenuItem value="lift">Lift</MenuItem>
                            <MenuItem value="stairs">Stairs</MenuItem>
                            <MenuItem value="door">Door</MenuItem>
                        </Select>
                    </FormControl>
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
                        Are you sure you want to delete this node? This action
                        will delete all edges connected to this node.
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
                        onClick={() => onDelete(updatedNode.id)}
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
