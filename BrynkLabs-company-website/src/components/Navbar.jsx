import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <a href="#pricing" className="nav-link">Pricing</a>
        <a href="#services" className="nav-link">Services</a>
      </div>
    </nav>
  );
};

export default Navbar;
