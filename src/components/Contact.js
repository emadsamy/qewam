import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={classes.contactContainer}>
      <div className="container">
        <div className="bg-title mb-4">Say Hello to us</div>
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-details">
              <div className="text mb-3">
                Send a small description of your business
                <br />
                and its needs, so we get a better idea of how to help you.
              </div>
              <div className={`${classes.cRow}`}>
                <div className={classes.smTitle}>Phone :</div>
                +44 7538 412340
              </div>
              <div className={`${classes.cRow}`}>
                <div className={classes.smTitle}>Email :</div>
                info@qewam.com
              </div>
              <div className={`${classes.cRow} mb-4`}>
                <div className={classes.smTitle}>Headquarters :</div>
                Riyadh, Central SA
              </div>
              <div className={`${classes.title} text-uppercase mb-4`}>
                Don’t miss updates from us
              </div>
              <div className="form-group d-flex justify-content-between">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Example@email.com"
                />
                <button className={`btn ${classes.btn}`}>Subscribe</button>
              </div>
              <div className={`mb-5 ${classes.contactLinks}`}>
                <NavLink to="/terms-and-conditions" className="c-link">
                  Terms and conditions
                </NavLink>
                <NavLink to="/blog" className="c-link">
                  Blog
                </NavLink>
                <NavLink to="/about" className="c-link">
                  About Us
                </NavLink>
              </div>
              <div className="text pt-5">
                Copyright © 2019 This is Beyond Limited. All rights reserved.
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={`text-center ${classes.contactView}`}>
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
