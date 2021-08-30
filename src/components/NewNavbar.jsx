import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
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
            <Link className="navLink" to="/">
              Home
            </Link>
            <NavDropdown
              title="Wedding Weekend"
              id="basic-nav-dropdown"
              class="navLink"
            >
              <NavDropdown.Item href="/venue" className="navLink">
                Venue
              </NavDropdown.Item>
              <NavDropdown.Item href="/rehearsaldinner" className="navLink">
                Rehearsal Dinner
              </NavDropdown.Item>
            </NavDropdown>
            <Link to="/weddingparty" className="navLink">
              Wedding Party
            </Link>
            <Link to="/accomodations" className="navLink">
              Accomodations
            </Link>
            <Link to="/photos" className="navLink">
              Photos
            </Link>
            {/* <Link to="/rsvp" className="navLink">
              RSVP
            </Link> */}
            <Link to="/registry" className="navLink">
              Registry
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NewNavbar;