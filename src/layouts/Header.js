import React from "react";

import "./layout.css";
import Card from "../components/Card/Card";
import ProfilePic from "../images/Mark-Zuckerberg.jpg";
import SearchInput from "../components/TextInput/SearchInput";
import TimeWidget from "../components/Widget/TimeWidget";
import HeaderIcons from "../components/HeaderIcons/HeaderIcons";

const Header = () => {
  return (
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
  );
};

export default Header;
