import React, { useState } from "react";
import "./Toolbar.css";

const Toolbar = () => {
  return (
    <div class="header-toolbar">
      <div class="toolbar">
        <div class="text">Follow us</div>
        <div class="line-vertical">
          <div class="lv"></div>
        </div>
        <div class="scoialmedia mb-4">
          <a href="link">
            <img
              src={require("../assets/img/socialmedia/instagram.svg")}
              alt=""
              class="img-fluid"
            />
          </a>
          <a href="link">
            <img
              src={require("../assets/img/socialmedia/linkedin.svg")}
              alt=""
              class="img-fluid"
            />
          </a>
          <a href="link">
            <img
              src={require("../assets/img/socialmedia/twitter.svg")}
              alt=""
              class="img-fluid"
            />
          </a>
          <a href="link">
            <img
              src={require("../assets/img/socialmedia/facebook.svg")}
              alt=""
              class="img-fluid"
            />
          </a>
          <a href="link">
            <img
              src={require("../assets/img/socialmedia/youtube.svg")}
              alt=""
              class="img-fluid"
            />
          </a>
        </div>
        <div class="text">Sroll Down For More</div>
      </div>
    </div>
  );
};

export { Toolbar };
