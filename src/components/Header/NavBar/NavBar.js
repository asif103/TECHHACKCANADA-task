import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import {Link} from "react-router-dom";
import './NavBar.css'


function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">TechHack Task</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Link to="/" className="menuItem">Home</Link>
                    <Link to="/movies" className="menuItem" activeClassName="menuItemSelected">Movies</Link>
                    <Link to="/series" className="menuItem" activeClassName="menuItemSelected">Series</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
