import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; 
import "../style/Sidebar.css";

function Sidebar({ onSelect }) {
  const [activeKey, setActiveKey] = useState("myAccount");

  const menuItems = [
    { name: "My Account", key: "myAccount", path: "/myAccount" },
    { name: "Profile", key: "profile", path: "/profile" },
    { name: "Ads", key: "ads", path: "/ads" },
    { name: "Post Ad", key: "postAd", path: "/postAd" },
    { name: "Logout", key: "logout", path: "/logout" },
  ];

  const location = useLocation(); 

  useEffect(() => {
    const matchedItem = menuItems.find(item => location.pathname.includes(item.path));
    
    if (matchedItem) {
      setActiveKey(matchedItem.key); 
    }
  }, [location]); 

  const handleSelect = (key) => {
    setActiveKey(key);
    if (onSelect) {
      onSelect(key);
    }
  };

  return (
    <div className="sidebar">
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.key}
            onClick={() => handleSelect(item.key)}
            className={`sidebar-item ${activeKey === item.key ? "active" : ""}`}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
