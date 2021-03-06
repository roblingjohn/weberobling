import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

class Navbar extends Component {
  // componentDidMount() {
  //   // allow the sandwich menu to appear on smaller screens
  //   const M = window.M;
  //   document.addEventListener("DOMContentLoaded", function () {
  //     var elems = document.querySelectorAll(".sidenav");
  //     M.Sidenav.init(elems, {});
  //   });
  // }
  render() {
    return (
      <nav className="navbar navbar-expand-md">
        <Link to="./">
          <img src={logo} className="logo" alt="John & Caitlin" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="./">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Wedding Weekend
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="#">
                  Action
                </Link>
                <Link className="dropdown-item" to="#">
                  Another action
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">
                  Something else here
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="./weddingparty">
                Wedding Party
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="./accomodations">
                Accomodations
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="./photos">
                Photos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="./registry">
                Registry
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
