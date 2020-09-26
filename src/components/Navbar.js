import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div class="container">
        <div class="nav-content">
          <div class="nav-logo">
            <Link to="/">
              <img src={require("../assets/img/logo.png")} alt="Logo" />
            </Link>
          </div>
          <div id="menuBar" class="menu-bar">
            <div class="child-bar-1"></div>
            <div class="child-bar-2"></div>
            <div class="child-bar-3"></div>
          </div>
          <div id="navLinks" class="nav-links">
            <ul class="list-unstyled">
              <li class="nav-link">
                <a href="pricing.html">Pricing</a>
              </li>
              <li class="nav-link">
                <a href="about.html">About Us</a>
              </li>
              <li class="nav-link">
                <a href="blog.html">Blog</a>
              </li>
              <li class="nav-btn">
                <a class="btn main-btn" href="login.html">
                  Contact Us
                </a>
              </li>
              <li class="nav-btn">
                <a class="btn main-btn-gradient" href="list">
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
