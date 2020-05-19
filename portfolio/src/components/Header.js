import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-container">
      <Link className="header-title" to="/">
        <h1>Harrison Micheal Seaborn</h1>
      </Link>
      <nav className="nav-link-cont">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/projects">
          Projects
        </NavLink>
        <NavLink className="nav-link" to="/resume">
          Resume
        </NavLink>
        <NavLink className="nav-link" to="/contact">
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
