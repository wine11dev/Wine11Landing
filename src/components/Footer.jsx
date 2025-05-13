import React from "react";
import "./Footer.css";
import logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src={logo} alt="Wine 1-1 Logo" className="footer-logo" />
          <p className="tagline">Smart, Boutique Alcohol Delivery</p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Explore</h4>
            <a href="#home">Home</a>
            <a href="#how">How It Works</a>
            <a href="#about">About</a>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies Settings</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 WINE.1.1. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
