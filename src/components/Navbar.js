import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [toggleBar, setToggleBar] = useState(false);
  const toggleBarHandler = () => {
    setToggleBar(!toggleBar);
  };
  const hiddenNav = () => {
    setToggleBar(false);
  };
  return (
    <React.Fragment>
      <nav>
        <div className="container">
          <div className="nav-content">
            <div className="nav-logo">
              <Link to="/">
                <img src={require("../assets/img/logo.png")} alt="Logo" />
              </Link>
            </div>
            <div
              id="menuBar"
              className={`menu-bar ${toggleBar ? "active" : ""}`}
              onClick={toggleBarHandler}
            >
              <div className="child-bar-1"></div>
              <div className="child-bar-2"></div>
              <div className="child-bar-3"></div>
            </div>
            <div
              id="navLinks"
              className={`nav-links ${toggleBar ? "active" : ""}`}
            >
              <ul className="list-unstyled">
                <li className="nav-link">
                  <NavLink onClick={hiddenNav} to="/pricing">
                    Pricing
                  </NavLink>
                </li>
                <li className="nav-link">
                  <NavLink onClick={hiddenNav} to="/about">
                    About Us
                  </NavLink>
                </li>
                <li className="nav-link">
                  <NavLink onClick={hiddenNav} to="/blog">
                    Blog
                  </NavLink>
                </li>
                <li className="nav-btn">
                  <NavLink
                    onClick={hiddenNav}
                    className="btn main-btn"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="nav-btn">
                  <NavLink
                    onClick={hiddenNav}
                    className="btn main-btn-gradient"
                    to="/"
                  >
                    Get Started
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`backdrop ${toggleBar ? "active" : ""}`}
        onClick={hiddenNav}
      ></div>
    </React.Fragment>
  );
};

export { Navbar };
