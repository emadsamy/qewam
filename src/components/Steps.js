import React, { useState } from "react";
import "./Steps.css";

const Steps = () => {
  return (
    <div class="how-works-container">
      <div class="container text-center">
        <div class="bg-title mb-2">How its Work!</div>
        <div class="text">
          modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem.
        </div>
        <div class="steps pt-5">
          <div class="step-card pt-1">
            <button class="btn main-btn-gradient mb-4">Get Started</button>
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
  );
};

export { Steps };
