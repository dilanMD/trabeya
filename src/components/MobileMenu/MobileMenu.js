import React from "react";
import { FaHome, FaArrowAltCircleUp } from "react-icons/fa";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { MdAccountBox } from "react-icons/md";
import { RiBookletLine, RiComputerLine } from "react-icons/ri";

import "./MobileMenu.css";
import Card from "../../components/Card/Card";
import Search from "../../components/TextInput/SearchInput";
import { COLORS } from "../../constants/colors";

const MobileMenu = (props) => {
  const { green } = COLORS;
  const { handler } = props;

  return (
    <div id="mobile-menu">
      <Card>
        <div className="mobile-menu-item">
          <FaHome color={green} className="mobile-menu-icon" size={22} />
          <span className="mobile-menu-name">Home</span>
        </div>
        <div className="mobile-menu-item">
          <AiOutlineAppstoreAdd
            color={green}
            className="mobile-menu-icon"
            size={22}
          />
          <span className="mobile-menu-name">Apps</span>
        </div>
        <div className="mobile-menu-item">
          <MdAccountBox color={green} className="mobile-menu-icon" size={22} />
          <span className="mobile-menu-name">Profile</span>
        </div>
        <div className="mobile-menu-item">
          <RiBookletLine color={green} className="mobile-menu-icon" size={22} />
          <span className="mobile-menu-name">Reports</span>
        </div>
        <div className="mobile-menu-item">
          <RiComputerLine
            color={green}
            className="mobile-menu-icon"
            size={22}
          />
          <span className="mobile-menu-name">Inside The App</span>
        </div>
        <div className="mobile-menu-item">
          <RiComputerLine
            color={green}
            className="mobile-menu-icon"
            size={22}
          />
          <span className="mobile-menu-name">Natural Language Query</span>
        </div>
        <FaArrowAltCircleUp
          color={green}
          size={30}
          id="mobile-menu-collapse"
          onClick={handler}
        />
      </Card>
    </div>
  );
};

export default MobileMenu;
