import "./NavBar.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-container">
          <div
            className={`hamburger ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/pokemon">Pokemon</CustomLink>
            {/* <CustomLink to="/items">Items</CustomLink>
            <CustomLink to="/locations">Locations</CustomLink> */}
            {/* <CustomLink to="/Search">Search</CustomLink> */}
          </ul>
        </div>
      </nav>
    </header>
  );
}

function CustomLink({ to, children, ...props }) {
  return (
    <li className="nav-item">
      <NavLink to={to} {...props} className="nav-link">
        {children}
      </NavLink>
    </li>
  );
}
