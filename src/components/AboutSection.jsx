import React from "react";
import "./AboutSection.css";
import aboutImage from "../assets/about_image.png"; // replace with your image path

const AboutSection = () => {
  return (
    <section id="about" className="about">
         <div className="container">
      <div className="about-left">
        <h2>About Us</h2>
        <p>
          Wine11 transforms on-demand alcohol delivery into a boutique experience, leveraging AI to offer personalized search,
          recommendations, and a streamlined checkout process. Its branding, which incorporates the Winebulance,
          'Pouramedics' delivery, and 'Thirst Responder' order takers, aims to create a delightful customer journey.
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
