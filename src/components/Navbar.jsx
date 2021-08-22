import Hamburger from "hamburger-react";
import React from "react";
import logo from "../assets/download.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        zIndex: 99,
        width: "100%",
      }}
      className="navbar navbar-expand-lg navbar-light bg-secondary"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="https://internship.zuri.team/">
          <img className="logo" src={logo} alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span className="navbar-toggler-icon"></span>
           */}
          <Hamburger />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            style={{ marginLeft: "auto" }}
            className="navbar-nav ml-auto mb-2 mb-lg-0"
          >
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#home">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#works">
                Past Works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
