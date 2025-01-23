import { AppBar, Button, Toolbar, Typography } from "@mui/material";

interface AdminHeaderProps {
    onAddNode: () => void;
    onAddEdge: () => void;
}

export default function AdminHeader({
    onAddNode,
    onAddEdge,
}: Readonly<AdminHeaderProps>) {
    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    FHTWays Admin Panel
                </Typography>
                <Button color="primary" variant="outlined" onClick={onAddNode}>
                    Add Node
                </Button>
                <Button
                    color="secondary"
                    variant="outlined"
                    sx={{ ml: 2 }}
                    onClick={onAddEdge}
                >
                    Add Edge
                </Button>
            </Toolbar>
        </AppBar>
    );
}
