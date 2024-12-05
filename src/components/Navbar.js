import React from "react";
import "../style/Navbar.css";
import profile from "../assets/images/Vector.png";
import banner from "../assets/images/Component 1.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="navbar">
      <img className="logo" src={banner} alt="banner" />
      <div className="nav-links">
        <a href="/signup" className="signup-link">
          <img className="profile-item" src={profile} alt="profile" />
          Sign Up
        </a>
        <button
          className="post-ad-btn"
          onClick={() => navigate("/dashboard/postAd")}
        >
          Post Your Ad
        </button>
      </div>
    </header>
  );
}

export default Navbar;
