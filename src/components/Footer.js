import React from "react";
import "../style/Footer.css";
import banner from "../assets/images/brand.png";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";
import be from "../assets/images/be.png";
import youtube from "../assets/images/youtube.png";

function Footer() {
  return (
    <footer className="footer">
      <img className="footer-logo" src={banner} alt="banner" />
      <p className="copy-right">Copyright 2024</p>
      <div className="social-icons">
      <img className="footer-logo" src={facebook} alt="facebook" />
      <img className="footer-logo" src={twitter} alt="twitter" />
      <img className="footer-logo" src={be} alt="be" />
      <img className="footer-logo" src={youtube} alt="youtube" />
      </div>
    </footer>
  );
}

export default Footer;
