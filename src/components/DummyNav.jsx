import React from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/logo.png"

const DummyNav = () => {
  return (
    <Navbar className="newNavbar">
      <Navbar.Brand href="/">
        <img src={logo} className="logo dummyLogo" alt="John & Caitlin"/>
      </Navbar.Brand>
    </Navbar>
  );
};

export default DummyNav;
