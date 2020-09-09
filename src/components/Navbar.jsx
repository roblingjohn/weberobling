import React from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} className="logo" alt="John & Caitlin" />
    </div>
  );
};

export default Navbar;
