import React, { Component } from "react";
import { Offers, Steps, Pricing } from "../components";

class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="content">
          <div className="header">
            <div className="container">
              {/* <Toolbar /> */}
              <div className="header-items mb-3">
                <div className="header-details">
                  <div className="bg-title mb-4">
                    Build.
                    <br />
                    Launch.
                    <br />
                    Grow.
                  </div>
                  <div className="text mb-5">
                    Are you looking for a real partner to build your
                    <br />
                    Startup with you? We and our partners support
                    <br />
                    companies and entrepreneurs to turn ideas into a<br />
                    real business.
                  </div>
                  <button className="btn main-btn-gradient">Get Started</button>
                </div>

                <div className="header-view">
                  <img
                    src={require("../assets/img/header-mockup.svg")}
                    alt="Mockup"
                    className="img-fluid"
                  />
                </div>

                {/* Toolbar */}
              </div>

              <div className="header-leaders">
                <div className="title mb-4">
                  Loved and Trusted by Industry Leaders
                </div>
              </div>
            </div>
          </div>

          <div className="weare-container">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="weare-box text-center">
                    <img
                      src={require("../assets/img/weare.svg")}
                      alt=""
                      className="img-fluid weare-view"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="weare-box">
                    <div className="bg-title mb-4">
                      We are
                      <br />
                      Qewam
                    </div>
                    <div className="text mb-4">
                      Qewam Builder is an online platform for early-stage
                      startups; it aims to provide support and guidance to
                      non-tech entrepreneurs at the very early stage of building
                      a business through developing their minimal viable
                      product, branding strategy and establishing their online
                      presence.
                    </div>
                    <a href="link" className="simple-btn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Offers />
          <Steps />

          <div className="studies-container">
            <div className="container">
              <div className="bg-title mb-2">Case Studies</div>
              <div className="text mb-4">
                modi tempora incidunt ut labore et dolore .
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="study-card">
                    <img
                      src={require("../assets/img/image.jpg")}
                      alt=""
                      className="img-fluid mb-3"
                    />
                    <div className="md-title mb-2">Scoopeer</div>
                    <div className="text">
                      Scopeer is the leading crowdfunding platform, first
                      company got licence from Saudi Arabia Capital Market
                      Authority to conduct equity based crowdfunding.
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="study-card">
                    <img
                      src={require("../assets/img/image.jpg")}
                      alt=""
                      className="img-fluid mb-3"
                    />
                    <div className="md-title mb-2">Walzay</div>
                    <div className="text">
                      Walzay is a talent marketplace that lets companies find
                      talented remote tech talent from around the world for in-
                      office/remote roles.
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="study-card">
                    <img
                      src={require("../assets/img/image.jpg")}
                      alt=""
                      className="img-fluid mb-3"
                    />
                    <div className="md-title mb-2">Vegan 9</div>
                    <div className="text">
                      formed with a vision to save environment by producing
                      Cruelty Free Food and to provide an innovative solution
                      for nutritious.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Pricing />

          <div className="blogs-container">
            <div className="container">
              <div className="bg-title mb-2">Blogs</div>
              <div className="text d-flex justify-content-between mb-4">
                Read the latest stories from our world.
                <a className="simple-btn">Read More</a>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="blog-card">
                    <img
                      src={require("../assets/img/image.jpg")}
                      alt=""
                      className="img-fluid"
                    />
                    <div className="title">
                      A Saudi-based startup capitalizes on gig-economy
                      opportunities
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="blog-card">
                    <img
                      src={require("../assets/img/image.jpg")}
                      alt=""
                      className="img-fluid"
                    />
                    <div className="title">
                      Save your money and energy by hiring a professional
                      virtual assistant
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="blog-card">
                    <img
                      src={require("../assets/img/image.jpg")}
                      alt=""
                      className="img-fluid"
                    />
                    <div className="title">
                      Thriving Saudi startup scene to produce top-30 companies,
                      WEF hears
                    </div>
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
