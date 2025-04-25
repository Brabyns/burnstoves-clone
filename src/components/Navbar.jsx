import "../styles/Navbar.css";
import React, { useState } from "react";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <nav className={`navbar ${navOpen ? "nav-open" : ""}`}>
      <div className="logo">
        <img src="burnLogo.jpeg" alt="BurnLogo" />
      </div>

      <ul className={`nav-links ${navOpen ? "active" : ""}`}>
        <li onClick={closeNav}>About Us</li>
        <li onClick={closeNav}>Products</li>
        <li onClick={closeNav}>Caborn</li>
        <li onClick={closeNav}>Impact</li>
        <li onClick={closeNav}>Media</li>
        <li onClick={closeNav}>Careers</li>
        <li onClick={closeNav}>Support</li>
      </ul>

      <div className="purchase-button">Purchase</div>

      <button
        className="nav-btn"
        id="open__nav-btn"
        onClick={toggleNav}
        style={{ display: navOpen ? "none" : "inline-block" }}
      >
        <i className="uil uil-bars"></i>
      </button>

      <button
        className="nav-btn"
        id="close__nav-btn"
        onClick={toggleNav}
        style={{ display: navOpen ? "inline-block" : "none" }}
      >
        <i className="uil uil-multiply"></i>
      </button>
    </nav>
  );
}

export default Navbar;
