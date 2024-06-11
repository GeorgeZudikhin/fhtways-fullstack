import React from 'react';
import {Navbar, Nav, Button, Container} from 'react-bootstrap';

function Header({ onAddNode }) {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#">FHTWays Admin Panel</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#help">Help</Nav.Link>
                    </Nav>
                    <Button variant="outline-success" onClick={onAddNode}>
                        Add Node
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;