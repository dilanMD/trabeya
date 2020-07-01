import React from "react";
import { MdMailOutline } from "react-icons/md";
import { RiNotification3Line } from "react-icons/ri";

import "./HeaderIcons.css";

const HeaderIcons = (props) => {
  const { username, userImage } = props;

  return (
    <div className="header-icons-container">
      <div className="header-icon">
        <MdMailOutline size={20} />
        <span style={{ backgroundColor: "blue" }}></span>
      </div>
      <div className="header-icon">
        <RiNotification3Line size={20} />
        <span style={{ backgroundColor: "orange" }}></span>
      </div>
      <p className="username">{username}</p>
      <img className="user-image" src={userImage} alt="userImage" />
    </div>
  );
};

export default HeaderIcons;
