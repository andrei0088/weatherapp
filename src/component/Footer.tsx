import React from "react";

const Footer = () => {
  return (
    <footer className="footer-site">
      <div className="footer-content">
        <span>&copy; {new Date().getFullYear()} WeatherApp</span>
        <span>
          Made by <strong>Soft88A</strong>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
