import React, { useState } from "react";
import "./HeroSection.css";
import heroImage from "../assets/hero_section.png";
import checkIcon from "../assets/check_green.png"; // ✅ your green check icon

const HeroSection = () => {
  const [loading, setLoading] = useState(false);
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!zip || !phone) {
      alert("Please fill in both ZIP and phone.");
      return;
    }

    const data = { zip, phone };
    setLoading(true);
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzvNP5r9QKrYReIGfOWDBXVNnOu5yGveMNtP7HbPSMsnyfubaoPkVpnWpFxMPgdkmyjWA/exec",
        {
          method: "POST",
          mode:"cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(data).toString(),
        }
      );

      setSubmitted(true);
    } catch (error) {
      console.log("submitted")
    } finally {
      setLoading(false);
      setSubmitted(true); // always show confirmation box
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
  <div className="hero-left">
  <h1>Get Your Drink<br />Delivered Now</h1>

  <div className="hero-form-wrapper">
    {loading ? (
      <div className="loader"></div>
    ) : !submitted ? (
      <div className="hero-form">
        <p>Where are you located?</p>

        <div className="input-wrapper">
          <span className="input-icon">📍</span>
          <input
            type="text"
            placeholder="Zip code"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <span className="input-icon">📞</span>
          <input
            type="text"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <button onClick={handleSubmit}>Call Wine-1-1</button>
      </div>
    ) : (
      <div className="confirmation-box">
        <img src={checkIcon} alt="Wine delivery success" className="confirmation-image" />
        <h2 className="confirmation-title">You're On the List!</h2>
        <p className="confirmation-message">
          Thanks! We've added your info as we explore bringing Wine-1-1 to your area.
          Stay tuned for updates!
        </p>
      </div>
    )}
  </div>
</div>


          <div className="hero-right">
            <img src={heroImage} alt="Wine delivery emergency" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
