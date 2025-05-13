import React from "react";
import logo from '../assets/logo.svg';
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <img src={logo} alt="Wine11 Logo" />
        </div>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#how">How It Works</a>
          <a href="#con">Contact Us</a>
          <a href="#about">About</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
