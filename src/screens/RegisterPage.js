import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { register } from "../api/register";
import "../style/RegisterPage.css";
import illustration from "../assets/images/Component 2.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import banner from "../assets/images/Component 1.png";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const data = await register(username, email, password);

      if (data.jwt) {
        localStorage.setItem("jwt", data.jwt);

        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="register-page">
      <Navbar />

      <div className="register-container">
        <div className="form-section">
        <div className="section">
          <img className="image-banner" src={banner} alt="Banner" />
          <div className="text-data">
            Listbnb, a Largest Classified Listing Marketplace, offers perfect
            Ads classifieds...
          </div>
        </div>


          <h1>Create Your Account</h1>
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <FaEnvelope className="icon" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <FaUser className="icon" />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <FaLock className="icon" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <FaLock className="icon" />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="register-btn">
              Register
            </button>
          </form>
        </div>

        <div className="info-section">
          <img src={illustration} alt="Illustration" />
          <p>
            <strong>Already Have an Account?</strong> <br />
            To connect with us, please log in to your account if you have one
            already.
          </p>
          <button className="login-btn" onClick={() => navigate("/")}>
            Login
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;
