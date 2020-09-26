import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-content">
          <div className="nav-logo">
            <Link to="/">
              <img src={require("../assets/img/logo.png")} alt="Logo" />
            </Link>
          </div>
          <div id="menuBar" className="menu-bar">
            <div className="child-bar-1"></div>
            <div className="child-bar-2"></div>
            <div className="child-bar-3"></div>
          </div>
          <div id="navLinks" className="nav-links">
            <ul className="list-unstyled">
              <li className="nav-link">
                <NavLink to="/pricing">Pricing</NavLink>
              </li>
              <li className="nav-link">
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li className="nav-link">
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li className="nav-btn">
                <NavLink className="btn main-btn" to="/contact">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-btn">
                <NavLink className="btn main-btn-gradient" to="/">
                  Get Started
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
