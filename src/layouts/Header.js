import React, { useEffect } from "react";
import { TiThMenu } from "react-icons/ti";

import "./layout.css";
import Card from "../components/Card/Card";
import ProfilePic from "../images/Mark-Zuckerberg.jpg";
import SearchInput from "../components/TextInput/SearchInput";
import TimeWidget from "../components/Widget/TimeWidget";
import HeaderIcons from "../components/HeaderIcons/HeaderIcons";
import MobileMenu from "../components/MobileMenu/MobileMenu";

const Header = () => {
  let mobileHeader = document.getElementById("mobile-header");
  let mobileMenu = document.getElementById("mobile-menu");
  let menuToggle = document.getElementById("menu-toggle");
  let mobileCollapse = document.getElementById("mobile-menu-collapse");

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
