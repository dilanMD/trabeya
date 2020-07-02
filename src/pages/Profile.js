import React from "react";

import "./Common.css";
import Card from "../components/Card/Card";
import { COLORS } from "../constants/colors";
import ProfileImage from "../images/profile.png";

const Profile = () => {
  const { green, white, grey, text } = COLORS;
  return (
    <div className="row">
      <div className="col-s-4"></div>
      <div className="col-6">
        <Card radius={20}>
          <img src={ProfileImage} alt="Admin" />
          <h5 className="title" style={{ color: green }}>
            Profile
          </h5>
          <p className="info" style={{ color: grey }}>
            Welcome to profile page
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
