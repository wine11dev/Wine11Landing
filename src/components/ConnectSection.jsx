import React from "react";
import "./ConnectSection.css";
import connectImage from "../assets/connect_image.png"; // update with actual image file

const ConnectSection = () => {
  return (
    <section id="con" className="connect">
              <div className="container">
       
      <div className="connect-left">
        <h2>Experience Boutique<br />Alcohol Delivery,<br />Powered by AI</h2>
        <p>
          Wine11 transforms on-demand alcohol delivery into a boutique experience, leveraging AI
          to offer personalized search, recommendations, and a streamlined checkout process.
        </p>
        <button>Call Wine-1-1</button>
      </div>
      <div className="connect-right">
        <img src={connectImage} alt="AI Powered Wine Delivery" />
      </div>
      </div>
    </section>
  );
};

export default ConnectSection;
