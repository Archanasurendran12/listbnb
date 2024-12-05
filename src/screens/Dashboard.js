import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import ProfileCard from "../components/ProfileCard";
import AdsCard from "../components/AdsCard";
import "../style/Dashboard.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfilePage from "../components/ProfilePage";
import PostAdd from "../components/PostAdd";
import { useLocation, useNavigate } from "react-router-dom";

const Dashboard = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("myAccount");

  useEffect(() => {
    const section = location.pathname.split("/")[2];
    if (section) {
      setActiveSection(section);
    }
  }, [location.pathname]);

  const handleSectionChange = (section) => {
    setActiveSection(section);
    navigate(`/dashboard/${section}`);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return <ProfilePage />;
      case "ads":
        return <AdsCard />;
      case "myAccount":
        return <ProfileCard />;
      case "postAd":
        return <PostAdd />;
      case "logout":
        return <div>Logging out...</div>;
      default:
        return <ProfileCard />;
    }
  };

  return (
    <div className="dashboard-container">
      <Navbar />

      <div className="dashboard">
        <div className="sidebar-column">
          <Sidebar onSelect={handleSectionChange} />{" "}
        </div>
        <div className="content-column">{renderContent()}</div>
      </div>

      <Footer />
    </div>
  );
};
export default Dashboard;
