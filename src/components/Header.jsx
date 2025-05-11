import React, { useState } from "react";
import logo from '../assets/logo.svg';
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
       
        <div className="logo">
        <img src={logo} alt="Wine11 Logo" className="logo-img" />
        </div>

        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <a href="#home">Home</a>
          <a href="#how">How It Works</a>
          <a href="#con">Contect US</a>
          <a href="#about">About</a>
        </nav>

        <div
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
