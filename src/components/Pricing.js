import React from "react";
import { Link } from "react-router-dom";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing-container">
      <div className="container">
        <div className="bg-title mb-2">Pricing</div>
        <div className="text d-flex justify-content-between mb-4">
          modi tempora incidunt ut labore et dolore .
          <a className="simple-btn">Read More</a>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <div className="pricing-card">
              <div className="pricing-header d-flex justify-content-between">
                <div className="bg-title text-uppercase">
                  One
                  <br />
                  Payment
                </div>
                <div className="md-title text-right">
                  32%
                  <div className="discount-title">Discount</div>
                </div>
              </div>
              <div className="pricing-footer">
                <div className="bg-title">
                  <div>39, 576</div>
                  <small>SAR</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="pricing-card">
              <div className="pricing-header d-flex justify-content-between">
                <div className="sm-title text-uppercase">
                  3 MONTHS <br />
                  INSTALLMENT
                  <br />
                  PLAN
                </div>
              </div>
              <div className="pricing-footer">
                <div className="bg-title">
                  <div>39, 576</div>
                  <small>SAR</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Pricing };
