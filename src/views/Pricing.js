import React, { Component } from "react";
import { Pricing } from "../components";
import "./Pricing.css";

class ViewPricing extends Component {
  render() {
    return (
      <div className="content">
        <div className="pricing-page-header">
          <div className="container">
            <div className="pricing-widget-header mb-5">
              <div className="pw-details">
                <div className="bg-title mb-3">Best Offer</div>
                <div className="text mb-3">
                  Qewam Builder is a business platform for early-stage startups;
                  it aims to provide support and guidance to entrepreneurs at
                  the very early stage of building a business through developing
                  business specialized content, coaching programs and business
                  services. Our core business revolves around building and
                  co-creating validated business models, and coaching
                  entrepreneurs on building startups with higher rates for
                  success.
                </div>
              </div>
              <div className="pw-view text-center">
                <img
                  src={require("../assets/img/benefits/benefit-1.svg")}
                  alt="Pricing"
                />
              </div>
            </div>
            <div className="pricing-text">
              <div className="md-title mb-4">Value Proposition</div>
              <div className="text">
                Our value proposition lies in the fact that we are the first
                company in the Middle East that creates customized startup
                services and On-going Business Development programs for Arab
                entrepreneurs acting in the Middle Eastern market. We aim to
                collaborate with incubators, accelerators and organizations to
                improve and empower our entrepreneurial eco-system by infusing
                startups that last and grow.
              </div>
            </div>
          </div>
        </div>
        <div className="pricing-list">
          <div className="container">
            <div className="bg-title mb-5">Build. Launch. Grow.</div>
            <div className="list-cards">
              <div className="list-card">
                <div className="list-card-view">
                  <img
                    src={require("../assets/img/benefits/benefit-1.svg")}
                    alt="Pricing List"
                  />
                </div>
                <div className="list-card-content">
                  <div className="md-title mb-3">Branding Solutions</div>
                  <ul className="list-unstyled">
                    <li>
                      <span></span> Modern Logo.
                    </li>
                    <li>
                      <span></span> Branding Guidelines.
                    </li>
                    <li>
                      <span></span> tationery Designs.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="list-card">
                <div className="list-card-view">
                  <img
                    src={require("../assets/img/benefits/benefit-1.svg")}
                    alt="Pricing List"
                  />
                </div>
                <div className="list-card-content">
                  <div className="md-title mb-3">Software Development</div>
                  <ul className="list-unstyled">
                    <li>
                      <span></span> Ecommerce Development.
                    </li>
                    <li>
                      <span></span> Marketplace Platform Development.
                    </li>
                    <li>
                      <span></span> Mobile Apps Development.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="list-card">
                <div className="list-card-view">
                  <img
                    src={require("../assets/img/benefits/benefit-1.svg")}
                    alt="Pricing List"
                  />
                </div>
                <div className="list-card-content">
                  <div className="md-title mb-3">Business Development</div>
                  <ul className="list-unstyled">
                    <li>
                      <span></span> On-going Business Development.
                    </li>
                    <li>
                      <span></span> Advisory Services.
                    </li>
                    <li>
                      <span></span> Consultancy Services.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="list-card">
                <div className="list-card-view">
                  <img
                    src={require("../assets/img/benefits/benefit-1.svg")}
                    alt="Pricing List"
                  />
                </div>
                <div className="list-card-content">
                  <div className="md-title mb-3">Online Presence</div>
                  <ul className="list-unstyled">
                    <li>
                      <span></span> Profiles Setup &amp; Integration.
                    </li>
                    <li>
                      <span></span> Social Media Management.
                    </li>
                    <li>
                      <span></span> Content Marketing.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Pricing />
      </div>
    );
  }
}

export { ViewPricing };
