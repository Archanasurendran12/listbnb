import React, { useEffect, useState } from "react";
import "../style/Profile.css";
import { getUserProfile, updateUserProfile } from "../api/profile";

function ProfilePage() {
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    photo: "",
    location: "",
    contactNumber: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const jwtToken = localStorage.getItem("jwt");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile(jwtToken);
        setProfileData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [jwtToken]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProfileData({
      ...profileData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const updatedData = await updateUserProfile(jwtToken, profileData);
      setSuccessMessage("Profile updated successfully!");
      setProfileData(updatedData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="profile-form-container">
      <div className="container-form">
        <form className="profile-form" onSubmit={handleSubmit}>
          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}
          <div className="profile-form-group">
            <label htmlFor="firstName">
              First Name<span className="required">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              value={profileData.firstName}
              onChange={handleChange}
              placeholder="Type here"
            />
          </div>
          <div className="profile-form-group">
            <label htmlFor="lastName">
              Last Name<span className="required">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              value={profileData.lastName}
              onChange={handleChange}
              placeholder="Type here"
            />
          </div>
          <div className="profile-form-group">
            <label htmlFor="email">
              Email<span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={profileData.email}
              onChange={handleChange}
              placeholder="Type here"
            />
          </div>
          <div className="profile-form-group">
            <label htmlFor="username">
              Username<span className="required">*</span>
            </label>
            <input
              type="text"
              id="username"
              value={profileData.username}
              onChange={handleChange}
              placeholder="Type here"
            />
          </div>
          <div className="profile-form-group">
            <label htmlFor="photo">
              Photo<span className="required">*</span>
            </label>
            <input
              type="text"
              id="photo"
              value={profileData.photo}
              onChange={handleChange}
              placeholder="Image url"
            />
          </div>
          <div className="profile-form-group">
            <label htmlFor="location">
              Location<span className="required">*</span>
            </label>
            <input
              type="text"
              id="location"
              value={profileData.location}
              onChange={handleChange}
              placeholder="Type here"
            />
          </div>
          <div className="profile-form-group">
            <label htmlFor="contactNumber">
              Contact Number<span className="required">*</span>
            </label>
            <input
              type="text"
              id="contactNumber"
              value={profileData.contactNumber}
              onChange={handleChange}
              placeholder="Type here"
            />
          </div>
          <button type="submit" className="save-btn" disabled={loading}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
export default ProfilePage;
