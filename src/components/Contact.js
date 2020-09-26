import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="container">
        <div className="bg-title mb-4">Contact us</div>
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-details">
              <div className="text mb-3">
                Send a small description of your business
                <br />
                and its needs, so we get a better idea of how to help you.
              </div>
              <div className="c-row">
                <div className="sm-title">Phone :</div>
                +44 7538 412340
              </div>
              <div className="c-row">
                <div className="sm-title">Email :</div>
                info@qewam.com
              </div>
              <div className="c-row mb-4">
                <div className="sm-title">Headquarters :</div>
                Riyadh, Central SA
              </div>
              <div className="title text-uppercase mb-4">
                Don’t miss updates from us
              </div>
              <div className="form-group d-flex justify-content-between">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Example@email.com"
                />
                <button className="btn">Subscribe</button>
              </div>
              <div className="contact-links mb-5">
                <a href="link" className="c-link">
                  Terms and conditions
                </a>
                <a href="link" className="c-link">
                  Blog
                </a>
                <a href="link" className="c-link">
                  About Us
                </a>
              </div>
              <div className="text pt-5">
                Copyright © 2019 This is Beyond Limited. All rights reserved.
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-view text-center">
              <img
                src={require("../assets/img/contact.svg")}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Contact };
