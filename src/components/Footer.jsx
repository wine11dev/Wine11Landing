import React from "react";
import "./Footer.css";
import logo from "../assets/red_logo.svg"; // or .png

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img className="footer-logo-icon" src={logo} alt="Wine 1-1" />
        <nav>
          <a href="#home">Home</a>
          <a href="#how">How It Works</a>
          <a href="#about">About</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>© 2025 WINE.1.1. All rights reserved.</p>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
