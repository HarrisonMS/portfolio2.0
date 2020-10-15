import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-container">
      <Link className="header-title" to="/">
        {/* <h1>
          H<i className="fas fa-mountain"></i>rrison{" "}
          <span class="text-secondary">Micheal</span> Se
          <i className="fas fa-mountain"></i>
          born
        </h1> */}
        <h1>
          <i class="fab fa-dev"></i>
          Harrison <span class="text-secondary">Michael</span> Seaborn
        </h1>
      </Link>
      <nav className="nav-link-cont">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <NavLink className="nav-link" to="/projects">
          Projects
        </NavLink>
        <a
          className="nav-link"
          href="https://gitconnected.com/HarrisonMS/resume"
        >
          Resume
        </a>
        <NavLink className="nav-link" to="/contact">
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
