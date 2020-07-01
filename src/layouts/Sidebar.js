import React from "react";
import { MdMail } from "react-icons/md";

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
        <div className="message-icon-container">
          <MdMail className="message-icon" size={30} color={green} />
          <span style={{ backgroundColor: green, color: white }}>2</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
