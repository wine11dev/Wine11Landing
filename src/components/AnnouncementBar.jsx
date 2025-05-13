import React, { useState, useEffect } from "react";
import "./AnnouncementBar.css";

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(true);

  // Optional: hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) setVisible(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="announcement-bar">
      <span>🚨 Soft launch in May. Stay tuned!</span>
      <button onClick={() => setVisible(false)}>&times;</button>
    </div>
  );
};

export default AnnouncementBar;
