import React, { useEffect, useState } from "react";
import "../style/AdsCard.css";
import { fetchAds } from "../api/listadd";
import product from "../assets/images/myList1.png";
import { useNavigate } from "react-router-dom";

function AdsCard() {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
const navigate = useNavigate();
  useEffect(() => {
    const getAds = async () => {
      try {
        const jwtToken = localStorage.getItem("jwt");
        if (!jwtToken) {
          throw new Error("JWT token is missing. Please log in.");
        }
        const data = await fetchAds(jwtToken);
        setAds(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getAds();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
const handleEditClick = () => {
    navigate("/dashboard/postAd")
}
  return (
    <div className="ad-cards">
      {ads.map((ad) => (
        <div key={ad.id} className="ad-card">
          <img
            className="ad-image"
            src={product} 
            alt={ad.title || "Ad image"}
          />
          <div className="ad-details">
            <h3>{ad.title}</h3>
            <p>Location: {ad.location || "Kochi"}</p>
            <p className="price">${ad.price}</p>
          </div>
          <div className="ad-actions">
            <button
              className="view-btn"
              onClick={() => (window.location.href = `/adpage/${ad.id}`)}
            >
              View
            </button>
            <button className="edit-ad-btn" onClick={handleEditClick}>Edit Ad</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdsCard;
