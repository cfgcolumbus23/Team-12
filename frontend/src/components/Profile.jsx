import React from "react";
import "./Profile.css";
import Navbar from "./Navbar.jsx";

// sample info for now
const name = "Alexa";
const streak = 15;
const teamPoints = 2310;
const progress = 85;

const Profile = () => {
  return (
    <div className="profile-page">
      <Navbar />
      <div className="profile-header">
        <h1 className="profile-header-title">Welcome {name}!</h1>
      </div>
      <div className="streak-info">
        <p className="info-label">Your Streak:</p>
        <p className="info-value">{streak} days</p>
      </div>
      <div className="team-points">
        <p className="info-label">Store Points:</p>
        <p className="info-value">{teamPoints} points</p>
      </div>
      <div className="course-progress">
        <p className="info-label">Your Course Progress:</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}>
            {progress}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;