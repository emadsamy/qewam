import React, { useState } from "react";
import "./Offers.css";

const Offers = () => {
  const [offer, setOffer] = useState([
    {
      id: 1,
      title: "Business Development",
      body:
        "Qewam Builder is an online platform for early-stage startups; it aims to provide support and guidance to non-tech entrepreneurs at the very early stage of building a business through developing their minimal viable product,",
      image: require("../assets/img/benefits/benefit-4.svg"),
    },
    {
      id: 2,
      title: "Branding solution",
      body:
        " Qewam Builder is an online platform for early-stage startups; it aims to provide support and guidance to non-tech entrepreneurs at the very early stage of building a business through developing their minimal viable product",
      image: require("../assets/img/benefits/benefit-3.svg"),
    },
    {
      id: 3,
      title: "MVP Development",
      body:
        "Qewam Builder is an online platform for early-stage startups; it aims to provide support and guidance to non-tech entrepreneurs at the very early stage of building a business through developing their minimal viable product,",
      image: require("../assets/img/benefits/benefit-2.svg"),
    },
    {
      id: 4,
      title: "Online Presence",
      body:
        "Qewam Builder is an online platform for early-stage startups; it aims to provide support and guidance to non-tech entrepreneurs at the very early stage of building a business through developing their minimal viable product,",
      image: require("../assets/img/benefits/benefit-1.svg"),
    },
  ]);
  return (
    <div class="offers-container">
      <div class="container">
        {offer.map((offer) => {
          return (
            <div className="offer-card">
              <div className="offer-details">
                <div className="sub-title">We Offer</div>
                <div className="bg-title mb-4">{offer.title}</div>
                <div className="text mb-4">{offer.body}</div>
                <button className="btn main-btn-gradient">Get Started</button>
              </div>
              <div className="offer-view text-center">
                <img
                  src={offer.image}
                  alt=""
                  className="img-fluid offer-view"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Offers };
