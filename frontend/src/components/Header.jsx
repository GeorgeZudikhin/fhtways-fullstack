import React from 'react';
import {Navbar, Nav, Button, Container} from 'react-bootstrap';

function Header({ onAddNode, onAddEdge }) {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#">FHTWays Admin Panel</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#help">Help</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Button variant="outline-primary" className="mx-2" onClick={onAddNode}>Add Node</Button>
                        <Button variant="outline-info" className="mx-2" onClick={onAddEdge}>Add Edge</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
);
}

export default Header;