import React, { Component } from "react";
import "./About.css";

class About extends Component {
  state = {
    rows: [
      {
        id: 1,
        title: "About Qewam Builder",
        body:
          "Qewam Builder is an online platform for early-stage startups; it aims to provide support and guidance to non-tech entrepreneurs at the very early stage of building a business         through developing their minimal viable product, branding strategy and establishing their online presence. Our core business revolves around building and co-creating validated business models, and coaching entrepreneurs on building startups with higher rates for success. Our Belief is that everyone should be empowered to unlock their true potential in being a Builder, irrespective of what they know, what they have and what they are afraid of. In everything we do, we believe in pushing the boundaries of conventional thinking; to look at every problem differently and from the ground up.",
        image: require("../assets/img/weare.svg"),
      },
      {
        id: 2,
        title: "Our value",
        body:
          "Our value proposition lies in the fact that our operation process is completely virtual which makes us the first company in the Middle East that creates customized startup services and On- going Business Development programs for Arab entrepreneurs acting in the Middle Eastern market. We aim to collaborate with incubators, accelerators and organizations to improve and empower our entrepreneurial eco-system by infusing startups that last and grow. One of the main objectives of Qewam Builder is that the entrepreneurial team is 100% focused on developing the startup to launch it in the market in the fastest time possible. For this reason, the Venture Builder has complete central services that will offer the entrepreneurs everything they need so that they only have to worry about developing the idea.",
        image: require("../assets/img/weare.svg"),
      },
    ],
  };
  render() {
    return (
      <div className="about-container">
        <div className="container">
          <div className="about-cards">
            {this.state.rows.map((item) => {
              return (
                <div className="about-card">
                  <div className="about-card-details">
                    <div className="bg-title mb-4">{item.title}</div>
                    <div className="text">{item.body}</div>
                  </div>
                  <div className="about-card-view text-center">
                    <img src={item.image} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export { About };
