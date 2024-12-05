import "./App.css";
import AdsCard from "./components/AdsCard";
import PostAdd from "./components/PostAdd";
import Dashboard from "./screens/Dashboard";
import LoginPage from "./screens/LoginPage";
import ProfilePage from "./components/ProfilePage";
import RegisterPage from "./screens/RegisterPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/ads" element={<AdsCard />} />
          <Route path="/postAd" element={<PostAdd />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
