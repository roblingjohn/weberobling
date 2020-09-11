import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import logo from "../assets/images/logo.png";

class NewNavbar extends Component {
  render() {
    return (
      <Navbar expand="md" className="newNavbar navbar-dark">
        <Navbar.Brand href="/">
          <img src={logo} className="logo" alt="John & Caitlin" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="navlink" href="/">
              Home
            </Nav.Link>
            <NavDropdown title="Wedding Weekend" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/weddingparty">Wedding Party</Nav.Link>
            <Nav.Link href="/accomodations">Accomodations</Nav.Link>
            <Nav.Link href="/photos">Photos</Nav.Link>
            <Nav.Link href="/registry">Registry</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NewNavbar;
