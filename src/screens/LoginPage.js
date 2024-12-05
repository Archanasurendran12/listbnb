import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import "../style/LoginPage.css";
import illustration from "../assets/images/Component 2.png";
import { login } from "../api/login";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import banner from "../assets/images/Component 1.png";

const LoginPage = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await login(identifier, password);

      if (data.jwt) {
        localStorage.setItem("jwt", data.jwt);

        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-page">
      <Navbar />
      <div className="login-container">
        <div className="container-main">
        <div className="section">
          <img className="image-banner" src={banner} alt="Banner" />
          <div className="text-data">
            Listbnb, a Largest Classified Listing Marketplace, offers perfect
            Ads classifieds...
          </div>
        </div>
        <div className="login-form-section">
          <h1>Login to Your Account</h1>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-form-group">
              <FaUser className="icon" />
              <input
                type="text"
                placeholder="Username"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
              />
            </div>
            <div className="login-form-group">
              <FaLock className="icon" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="loginpage-btn">
              Login
            </button>
          </form>
        </div>
        </div>

        <div className="login-info-section">
          <img src={illustration} alt="Illustration" />
          <p>
            <strong>Don't Have an Account?</strong> <br />
            Sign up now to enjoy all the features of listbnb!
          </p>
          <button className="signup-btn" onClick={() => navigate("/signup")}>
            Sign Up
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LoginPage;
