import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          <div class="container">
            <div class="nav-content">
              <div class="nav-logo">
                <a href="index.html">
                  <img src={require("../assets/img/logo.png")} alt="Logo" />
                </a>
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
                  <li class="nav-link">
                    <a href="contact.html">Contact Us</a>
                  </li>
                  <li class="nav-btn">
                    <a class="btn main-btn" href="login.html">
                      Login
                    </a>
                  </li>
                  <li class="nav-btn">
                    <a class="btn main-btn-gradient" href="javascript:void(0)">
                      Get Started
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <div class="content">
          <div class="header">
            <div class="container">
              <div class="header-items mb-3">
                <div class="header-details">
                  <div class="bg-title mb-4">
                    Build.
                    <br />
                    Launch.
                    <br />
                    Grow.
                  </div>
                  <div class="text mb-5">
                    Are you looking for a real partner to build your
                    <br />
                    Startup with you? We and our partners support
                    <br />
                    companies and entrepreneurs to turn ideas into a<br />
                    real business.
                  </div>
                  <button class="btn main-btn-gradient">Get Started</button>
                </div>

                <div class="header-view">
                  <img
                    src={require("../assets/img/header-mockup.svg")}
                    alt="Mockup"
                    class="img-fluid"
                  />
                </div>

                <div class="header-toolbar">
                  <div class="toolbar">
                    <div class="text">Follow us</div>
                    <div class="line-vertical">
                      <div class="lv"></div>
                    </div>
                    <div class="scoialmedia mb-4">
                      <a href="#">
                        <img
                          src={require("../assets/img/socialmedia/instagram.svg")}
                          alt=""
                          class="img-fluid"
                        />
                      </a>
                      <a href="#">
                        <img
                          src={require("../assets/img/socialmedia/linkedin.svg")}
                          alt=""
                          class="img-fluid"
                        />
                      </a>
                      <a href="#">
                        <img
                          src={require("../assets/img/socialmedia/twitter.svg")}
                          alt=""
                          class="img-fluid"
                        />
                      </a>
                      <a href="#">
                        <img
                          src={require("../assets/img/socialmedia/facebook.svg")}
                          alt=""
                          class="img-fluid"
                        />
                      </a>
                      <a href="#">
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
              </div>

              <div class="header-leaders">
                <div class="title mb-4">
                  Loved and Trusted by Industry Leaders
                </div>
              </div>
            </div>
          </div>

          <div class="weare-container">
            <div class="container">
              <div class="row">
                <div class="col-lg-6">
                  <div class="weare-box text-center">
                    <img
                      src={require("../assets/img/weare.svg")}
                      alt=""
                      class="img-fluid weare-view"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="weare-box">
                    <div class="bg-title mb-4">
                      We are
                      <br />
                      Qewam
                    </div>
                    <div class="text mb-4">
                      Qewam Builder is an online platform for early-stage
                      startups; it aims to provide support and guidance to
                      non-tech entrepreneurs at the very early stage of building
                      a business through developing their minimal viable
                      product, branding strategy and establishing their online
                      presence.
                    </div>
                    <a href="#" class="simple-btn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="benefits-container">
            <div class="container">
              <div class="benefit-card">
                <div class="benefit-details">
                  <div class="sub-title">We Offer</div>
                  <div class="bg-title mb-4">
                    Business
                    <br />
                    Development
                  </div>
                  <div class="text mb-4">
                    Qewam Builder is an online platform for early-stage
                    startups; it aims to provide support and guidance to
                    non-tech entrepreneurs at the very early stage of building a
                    business through developing their minimal viable product,
                  </div>
                  <button class="btn main-btn-gradient">Get Started</button>
                </div>
                <div class="benefit-view text-center">
                  <img
                    src={require("../assets/img/benefits/benefit-4.svg")}
                    alt=""
                    class="img-fluid benefit-view"
                  />
                </div>
              </div>

              <div class="benefit-card">
                <div class="benefit-details">
                  <div class="sub-title">We Offer</div>
                  <div class="bg-title mb-4">
                    Branding <br />
                    solution
                  </div>
                  <div class="text mb-4">
                    Qewam Builder is an online platform for early-stage
                    startups; it aims to provide support and guidance to
                    non-tech entrepreneurs at the very early stage of building a
                    business through developing their minimal viable product,
                  </div>
                  <button class="btn main-btn-gradient">Get Started</button>
                </div>
                <div class="benefit-view text-center">
                  <img
                    src={require("../assets/img/benefits/benefit-3.svg")}
                    alt=""
                    class="img-fluid benefit-view"
                  />
                </div>
              </div>

              <div class="benefit-card">
                <div class="benefit-details">
                  <div class="sub-title">We Offer</div>
                  <div class="bg-title mb-4">
                    MVP
                    <br />
                    Development
                  </div>
                  <div class="text mb-4">
                    Qewam Builder is an online platform for early-stage
                    startups; it aims to provide support and guidance to
                    non-tech entrepreneurs at the very early stage of building a
                    business through developing their minimal viable product,
                  </div>
                  <button class="btn main-btn-gradient">Get Started</button>
                </div>
                <div class="benefit-view text-center">
                  <img
                    src={require("../assets/img/benefits/benefit-2.svg")}
                    alt=""
                    class="img-fluid benefit-view"
                  />
                </div>
              </div>

              <div class="benefit-card">
                <div class="benefit-details">
                  <div class="sub-title">We Offer</div>
                  <div class="bg-title mb-4">
                    Online
                    <br />
                    Presence
                  </div>
                  <div class="text mb-4">
                    Qewam Builder is an online platform for early-stage
                    startups; it aims to provide support and guidance to
                    non-tech entrepreneurs at the very early stage of building a
                    business through developing their minimal viable product,
                  </div>
                  <button class="btn main-btn-gradient">Get Started</button>
                </div>
                <div class="benefit-view text-center">
                  <img
                    src={require("../assets/img/benefits/benefit-1.svg")}
                    alt=""
                    class="img-fluid benefit-view"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="how-works-container">
            <div class="container text-center">
              <div class="bg-title mb-2">How its Work!</div>
              <div class="text">
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </div>
              <div class="steps pt-5">
                <div class="step-card pt-1">
                  <button class="btn main-btn-gradient mb-4">
                    Get Started
                  </button>
                  <div class="text-bold">
                    Submit Your <br />
                    Startup Idea
                  </div>
                </div>
                <div class="step-card">
                  <div class="step-counter mb-3">02</div>
                  <div class="text-bold mb-3">
                    Discovery
                    <br />
                    Meeting
                  </div>
                  <div class="text">
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                </div>

                <div class="step-card">
                  <div class="step-counter mb-3">03</div>
                  <div class="text-bold mb-3">
                    Brand &amp; Visual <br />
                    Design Creation
                  </div>
                  <div class="text">
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                </div>

                <div class="step-card">
                  <div class="step-counter mb-3">04</div>
                  <div class="text-bold mb-3">
                    MVP
                    <br />
                    Development
                  </div>
                  <div class="text">
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                </div>

                <div class="step-card">
                  <div class="step-counter mb-3">05</div>
                  <div class="text-bold mb-3">
                    Establishing
                    <br />
                    Online Presence
                  </div>
                  <div class="text">
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                </div>

                <div class="step-card">
                  <div class="step-counter mb-3">06</div>
                  <div class="text-bold mb-3">
                    Product Delivery
                    <br />
                    &amp; Launch
                  </div>
                  <div class="text">
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="studies-container">
            <div class="container">
              <div class="bg-title mb-2">Case Studies</div>
              <div class="text mb-4">
                modi tempora incidunt ut labore et dolore .
              </div>
              <div class="row">
                <div class="col-lg-4">
                  <div class="study-card">
                    <img
                      src={require("../assets/img/image.jpg")}
                      alt=""
                      class="img-fluid mb-3"
                    />
                    <div class="md-title mb-2">Scoopeer</div>
                    <div class="text">
                      Scopeer is the leading crowdfunding platform, first
                      company got licence from Saudi Arabia Capital Market
                      Authority to conduct equity based crowdfunding.
                    </div>
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="study-card">
                    <img
                      src={require("../assets/img/image.jpg")}
                      alt=""
                      class="img-fluid mb-3"
                    />
                    <div class="md-title mb-2">Walzay</div>
                    <div class="text">
                      Walzay is a talent marketplace that lets companies find
                      talented remote tech talent from around the world for in-
                      office/remote roles.
                    </div>
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="study-card">
                    <img
                      src={require("../assets/img/image.jpg")}
                      alt=""
                      class="img-fluid mb-3"
                    />
                    <div class="md-title mb-2">Vegan 9</div>
                    <div class="text">
                      formed with a vision to save environment by producing
                      Cruelty Free Food and to provide an innovative solution
                      for nutritious.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pricing-container">
            <div class="container">
              <div class="bg-title mb-2">Pricing</div>
              <div class="text d-flex justify-content-between mb-4">
                modi tempora incidunt ut labore et dolore .
                <a class="simple-btn">Read More</a>
              </div>

              <div class="row">
                <div class="col-lg-8">
                  <div class="pricing-card">
                    <div class="pricing-header d-flex justify-content-between">
                      <div class="bg-title text-uppercase">
                        One
                        <br />
                        Payment
                      </div>
                      <div class="md-title text-right">
                        32%
                        <div class="discount-title">Discount</div>
                      </div>
                    </div>
                    <div class="pricing-footer">
                      <div class="bg-title">
                        <div>39, 576</div>
                        <small>SAR</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="pricing-card">
                    <div class="pricing-header d-flex justify-content-between">
                      <div class="sm-title text-uppercase">
                        3 MONTHS <br />
                        INSTALLMENT
                        <br />
                        PLAN
                      </div>
                    </div>
                    <div class="pricing-footer">
                      <div class="bg-title">
                        <div>39, 576</div>
                        <small>SAR</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="blogs-container">
            <div class="container">
              <div class="bg-title mb-2">Blogs</div>
              <div class="text d-flex justify-content-between mb-4">
                Read the latest stories from our world.
                <a class="simple-btn">Read More</a>
              </div>
              <div class="row">
                <div class="col-lg-4">
                  <div class="blog-card">
                    <img
                      src={require("../assets/img/image.jpg")}
                      alt=""
                      class="img-fluid"
                    />
                    <div class="title">
                      A Saudi-based startup capitalizes on gig-economy
                      opportunities
                    </div>
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="blog-card">
                    <img
                      src={require("../assets/img/image.jpg")}
                      alt=""
                      class="img-fluid"
                    />
                    <div class="title">
                      Save your money and energy by hiring a professional
                      virtual assistant
                    </div>
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="blog-card">
                    <img
                      src={require("../assets/img/image.jpg")}
                      alt=""
                      class="img-fluid"
                    />
                    <div class="title">
                      Thriving Saudi startup scene to produce top-30 companies,
                      WEF hears
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-container">
            <div class="container">
              <div class="bg-title mb-4">Contact us</div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="contact-details">
                    <div class="text mb-3">
                      Send a small description of your business
                      <br />
                      and its needs, so we get a better idea of how to help you.
                    </div>
                    <div class="c-row">
                      <div class="sm-title">Phone :</div>
                      +44 7538 412340
                    </div>
                    <div class="c-row">
                      <div class="sm-title">Email :</div>
                      info@qewam.com
                    </div>
                    <div class="c-row mb-4">
                      <div class="sm-title">Headquarters :</div>
                      Riyadh, Central SA
                    </div>
                    <div class="title text-uppercase mb-4">
                      Don’t miss updates from us
                    </div>
                    <div class="form-group d-flex justify-content-between">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Example@email.com"
                      />
                      <button class="btn">Subscribe</button>
                    </div>
                    <div class="contact-links mb-5">
                      <a href="#" class="c-link">
                        Terms and conditions
                      </a>
                      <a href="#" class="c-link">
                        Blog
                      </a>
                      <a href="#" class="c-link">
                        About Us
                      </a>
                    </div>
                    <div class="text pt-5">
                      Copyright © 2019 This is Beyond Limited. All rights
                      reserved.
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="contact-view text-center">
                    <img
                      src={require("../assets/img/contact.svg")}
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export { Landing };