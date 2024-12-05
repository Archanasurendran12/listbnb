import React, { useEffect, useState } from "react";
import "../style/ProfileCard.css";
import profile from "../assets/images/myAccout.png";
import { fetchUserProfile } from "../api/userprofile";
import { useNavigate } from "react-router-dom";
import AdsCard from "./AdsCard";

function ProfileCard() {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const jwtToken = localStorage.getItem("jwt");

    const getProfile = async () => {
      try {
        const data = await fetchUserProfile(jwtToken);
        setProfileData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getProfile();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const handleEditClick = () => {
    navigate("/dashboard/profile");
  };
  return (
    <div>
      <div className="profile-card">
        <div className="profile-info">
          <img
            className="profile-img"
            src={profileData?.photo || profile}
            alt="Illustration"
          />
          <div className="card-data">
            <h2 className="data">
              {profileData?.firstName} {profileData?.lastName}
            </h2>
            <p className="description">
              Member since {profileData?.createdAt?.substring(0, 4)}
            </p>
            <hr className="line" />
            <p>
              {profileData?.location} | {profileData?.email} |{" "}
              {profileData?.phone}
            </p>
          </div>
        </div>
        <button className="edit-profile-btn" onClick={handleEditClick}>
          Edit Profile
        </button>
      </div>
      <div className="ad-data-card">
        <AdsCard />
      </div>
    </div>
  );
}

export default ProfileCard;
