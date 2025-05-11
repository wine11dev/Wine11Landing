import React from "react";
import "./HowItWorks.css";
import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";

const HowItWorks = () => {
  return (
    <section id="how" className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        <div className="step">
          <img src={step1} alt="Order" />
          <h3><span className="step-number">①</span> <strong>Order</strong></h3>
          <p>Use our straightforward system to select your desired beverages.</p>
        </div>

        <div className="step">
          <img src={step2} alt="Delivery" />
          <h3><span className="step-number">②</span> <strong>Delivery</strong></h3>
          <p>Our swift Winebulance is on its way to you!</p>
        </div>

        <div className="step">
          <img src={step3} alt="Drink" />
          <h3><span className="step-number">③</span> <strong>Drink</strong></h3>
          <p>Our Pouramedics handle the final delivery, right to your door.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
