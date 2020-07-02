import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/" onClick={handler}>
          <div className="mobile-menu-item">
            <FaHome color={green} className="mobile-menu-icon" size={22} />
            <span className="mobile-menu-name">Home</span>
          </div>
        </Link>
        <Link to="/apps" onClick={handler}>
          <div className="mobile-menu-item">
            <AiOutlineAppstoreAdd
              color={green}
              className="mobile-menu-icon"
              size={22}
            />
            <span className="mobile-menu-name">Apps</span>
          </div>
        </Link>
        <Link to="/profile" onClick={handler}>
          <div className="mobile-menu-item">
            <MdAccountBox
              color={green}
              className="mobile-menu-icon"
              size={22}
            />
            <span className="mobile-menu-name">Profile</span>
          </div>
        </Link>
        <Link to="/reports" onClick={handler}>
          <div className="mobile-menu-item">
            <RiBookletLine
              color={green}
              className="mobile-menu-icon"
              size={22}
            />
            <span className="mobile-menu-name">Reports</span>
          </div>
        </Link>
        <Link to="/inside" onClick={handler}>
          <div className="mobile-menu-item">
            <RiComputerLine
              color={green}
              className="mobile-menu-icon"
              size={22}
            />
            <span className="mobile-menu-name">Inside The App</span>
          </div>
        </Link>
        <Link to="/query" onClick={handler}>
          <div className="mobile-menu-item">
            <RiComputerLine
              color={green}
              className="mobile-menu-icon"
              size={22}
            />
            <span className="mobile-menu-name">Natural Language Query</span>
          </div>
        </Link>
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
