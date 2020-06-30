import React from "react";

import Card from "../components/Card/Card";
import { COLORS } from "../constants/colors";
import ProfilePic from "../images/Mark-Zuckerberg.jpg";
import Menu from "./Menu";

const Sidebar = () => {
  const { green, white } = COLORS;
  return (
    <div className="sidebar" style={{ backgroundColor: green }}>
      <div className="sidebar-contents">
        <img src={ProfilePic} alt="Profile Pic" className="profile-pic" />
        <h5 className="profile-name" style={{ color: white }}>
          Mark Zuckerberg
        </h5>
        <h5 className="designation" style={{ color: white }}>
          UI/UX Engineer
        </h5>
        <Menu />
      </div>
    </div>
  );
};

export default Sidebar;
