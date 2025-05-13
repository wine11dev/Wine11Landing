import React from "react";
import "./AboutSection.css";
import aboutImage from "../assets/about_image.png";

const AboutSection = () => {
  return (
    <section id="about" className="about">
      <div className="container about-container">
        <div className="about-left">
          <h2>✨ About Us</h2>
          <p>
            Wine11 transforms on-demand alcohol delivery into a boutique experience, leveraging AI to offer personalized
            search, recommendations, and a streamlined checkout process.
          </p>
          <p>
            Our branding features the iconic Winebulance, Pouramedics delivery team, and “Thirst Responders” to
            guarantee a delightful customer journey.
          </p>
        </div>
        <div className="about-right">
          <img src={aboutImage} alt="Wine11 About" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
