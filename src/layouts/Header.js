import React, { useEffect } from "react";
import { TiThMenu } from "react-icons/ti";
import { MdMailOutline } from "react-icons/md";
import { RiNotification3Line } from "react-icons/ri";

import "./layout.css";
import Card from "../components/Card/Card";
import ProfilePic from "../images/Mark-Zuckerberg.jpg";
import SearchInput from "../components/TextInput/SearchInput";
import TimeWidget from "../components/Widget/TimeWidget";
import HeaderIcons from "../components/HeaderIcons/HeaderIcons";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import { COLORS } from "../constants/colors";

const Header = () => {
  let mobileHeader = document.getElementById("mobile-header");
  let mobileMenu = document.getElementById("mobile-menu");
  let menuToggle = document.getElementById("menu-toggle");
  let mobileCollapse = document.getElementById("mobile-menu-collapse");
  const { green, white, grey } = COLORS;

  const menuToggleHandler = () => {
    if (menuToggle !== null) {
      mobileMenu.style.top = "50px";
      mobileCollapse.style.visibility = "visible";
      menuToggle.style.visibility = "hidden";
    }
  };

  const collapseHandler = () => {
    if (mobileCollapse !== null) {
      mobileMenu.style.top = "-250px";
      menuToggle.style.visibility = "visible";
      mobileCollapse.style.visibility = "hidden";
    }
  };

  return (
    <React.Fragment>
      <div id="mobile-header">
        <Card height={50} toggle handler={menuToggleHandler}>
          <div id="mobile-profile">
            <img src={ProfilePic} alt="" width="30" className="dp" />
            <MdMailOutline
              size={18}
              color={white}
              className="mobile-header-icon"
            />
            <RiNotification3Line
              size={18}
              color={white}
              className="mobile-header-icon"
            />
          </div>
          <MobileMenu id="mobile-menu" handler={collapseHandler} />
        </Card>
      </div>
      <div id="header">
        <Card height={70}>
          <div className="col-3"></div>
          <div className="col-3">
            <SearchInput />
          </div>
          <div className="col-3">
            <TimeWidget />
          </div>
          <div className="col-3">
            <HeaderIcons username="Mark Zuckerberg" userImage={ProfilePic} />
          </div>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default Header;
