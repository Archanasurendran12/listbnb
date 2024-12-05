import React, { useState } from "react";
import "../style/PostAdForm.css";
import { postAd } from "../api/postadd";
import { useNavigate } from "react-router-dom";

const PostAdd = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const jwtToken = localStorage.getItem("jwt");
  console.log(jwtToken, "jwtToken.....");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const adData = {
      title,
      price: parseFloat(price),
      description,
      image,
    };

    try {
      const data = await postAd(adData, jwtToken);
      console.log("Ad posted successfully:", data);
      navigate("/dashboard/ads");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="post-ad-container">
      <div className="post-container">
        <form className="post-ad-form" onSubmit={handleSubmit}>
          <div className="post-form-group">
            <label htmlFor="adTitle">
              Ad Title<span className="required">*</span>
            </label>
            <input
              type="text"
              id="adTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Type here"
              required
            />
          </div>
          <div className="post-form-group">
            <label htmlFor="price">
              Price<span className="required">*</span>
            </label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Type here"
              required
            />
          </div>
          <div className="post-form-group">
            <label htmlFor="description">
              Description<span className="required">*</span>
            </label>
            <textarea
              id="description"
              rows="5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Type here"
              required
            ></textarea>
          </div>
          <div className="post-form-group">
            <label htmlFor="photo">
              Photo URL<span className="required">*</span>
            </label>
            <input
              type="text"
              id="photo"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Image URL or Base64"
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="post-ad-btns" disabled={loading}>
            {loading ? "Posting..." : "Post Ad"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostAdd;
