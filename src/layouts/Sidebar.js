import React, { useState, useEffect } from "react";
import { MdMail } from "react-icons/md";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import "./Sidebar.css";
import Card from "../components/Card/Card";
import { COLORS } from "../constants/colors";
import { getActiveMenu } from "../helpers/SidebarHelper";
import ProfilePic from "../images/Mark-Zuckerberg.jpg";
import Menu from "./Menu";

const Sidebar = (props) => {
  const { activeMenu } = props;
  const { green, white } = COLORS;

  const collapseHandler = () => {
    let sidebar = document.getElementById("sidebar");
    sidebar.style.left = "-180px";
    setTimeout(() => {
      let openIcon = document.getElementById("open-icon");
      openIcon.style.visibility = "visible";
    }, 1000);
  };

  const openHandler = () => {
    let sidebar = document.getElementById("sidebar");
    sidebar.style.left = "0px";
    setTimeout(() => {
      let openIcon = document.getElementById("open-icon");
      openIcon.style.visibility = "hidden";
    }, 1000);
  };

  return (
    <div id="sidebar" style={{ backgroundColor: green }}>
      {/* Open icon */}
      <FaArrowAltCircleRight
        id="open-icon"
        size={30}
        color={green}
        onClick={() => openHandler()}
      />
      <div className="sidebar-contents">
        <img src={ProfilePic} alt="Profile Pic" className="profile-pic" />
        <h5 className="profile-name" style={{ color: white }}>
          Mark Zuckerberg
        </h5>
        <h5 className="designation" style={{ color: white }}>
          UI/UX Engineer
        </h5>
        <Menu active={activeMenu} />
        {/* Message icon with number of unread messages */}
        <div className="message-icon-container">
          <MdMail className="message-icon" size={30} color={green} />
          <span style={{ backgroundColor: green, color: white }}>2</span>
        </div>
        {/* Collapse icon */}
        <div className="collapse-container">
          <FaArrowAltCircleLeft
            className="collapse-icon"
            size={30}
            color={white}
            onClick={() => collapseHandler()}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
