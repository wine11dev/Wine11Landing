import React, { useState } from "react";
import "./HeroSection.css";
import heroImage from "../assets/hero_section.png";

const HeroSection = () => {
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!zip || !phone) {
      alert("Please fill in both ZIP and phone.");
      return;
    }

    const data = { zip, phone };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzvNP5r9QKrYReIGfOWDBXVNnOu5yGveMNtP7HbPSMsnyfubaoPkVpnWpFxMPgdkmyjWA/exec",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(data).toString(),
        }
      );

      setSubmitted(true);
    } catch (error) {
      alert(
        "You're On the List!, Thanks We've added your info as we explore bringing Wine-1-1 to your area. Stay tuned for updates!"
      );
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-left">
          <h1>
            Get your drink
            <br />
            delivered now
          </h1>

          {!submitted ? (
            <div className="hero-form">
              <p>Where are you located?</p>
              <input
                type="text"
                placeholder="zip"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
              <input
                type="text"
                placeholder="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <button onClick={handleSubmit}>Call Wine-1-1</button>
            </div>
          ) : (
            <p className="thank-you">
              You are on the list. Thanks! We've added your info as we explore
              bringing Wine-1-1 to your area. Stay tuned for updates!
            </p>
          )}
        </div>

        <div className="hero-right">
          <img src={heroImage} alt="Wine delivery emergency" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
