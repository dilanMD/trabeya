import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { MdAccountBox } from "react-icons/md";
import { RiBookletLine, RiComputerLine } from "react-icons/ri";

import "./Menu.css";
import { COLORS } from "../constants/colors";

const Menu = (props) => {
  const { active } = props;
  const { green, white } = COLORS;
  return (
    <React.Fragment>
      <Link to="/">
        <div className={`menu-item ${active === "home" && "active"}`}>
          <FaHome className="menu-icon" size={20} color={white} />
          <span className="menu-name" style={{ color: white }}>
            Home
          </span>
        </div>
      </Link>
      <Link to="/apps">
        <div className={`menu-item ${active === "apps" && "active"}`}>
          <AiOutlineAppstoreAdd className="menu-icon" size={20} color={white} />
          <span className="menu-name" style={{ color: white }}>
            Apps
          </span>
        </div>
      </Link>
      <Link to="/profile">
        <div className={`menu-item ${active === "profile" && "active"}`}>
          <MdAccountBox className="menu-icon" size={20} color={white} />
          <span className="menu-name" style={{ color: white }}>
            Profile
          </span>
        </div>
      </Link>
      <Link to="/reports">
        <div className={`menu-item ${active === "reports" && "active"}`}>
          <RiBookletLine className="menu-icon" size={20} color={white} />
          <span className="menu-name" style={{ color: white }}>
            Reports
          </span>
        </div>
      </Link>
      <Link to="/inside">
        <div className={`menu-item ${active === "inside" && "active"}`}>
          <RiComputerLine className="menu-icon" size={20} color={white} />
          <span className="menu-name" style={{ color: white }}>
            Inside The App
          </span>
        </div>
      </Link>
      <Link to="/query">
        <div className={`menu-item ${active === "query" && "active"}`}>
          <RiComputerLine className="menu-icon" size={20} color={white} />
          <span className="menu-name" style={{ color: white }}>
            Natural Language Query
          </span>
        </div>
      </Link>
    </React.Fragment>
  );
};

export default Menu;
