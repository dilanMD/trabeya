import React from "react";
import { FaHome } from "react-icons/fa";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { MdAccountBox } from "react-icons/md";
import { RiBookletLine, RiComputerLine } from "react-icons/ri";

import { COLORS } from "../constants/colors";

const Menu = () => {
  const { green, white } = COLORS;
  return (
    <React.Fragment>
      <div className="menu-item">
        <FaHome className="menu-icon" size={20} color={white} />
        <span className="menu-name" style={{ color: white }}>
          Home
        </span>
      </div>
      <div className="menu-item">
        <AiOutlineAppstoreAdd className="menu-icon" size={20} color={white} />
        <span className="menu-name" style={{ color: white }}>
          Apps
        </span>
      </div>
      <div className="menu-item">
        <MdAccountBox className="menu-icon" size={20} color={white} />
        <span className="menu-name" style={{ color: white }}>
          Profile
        </span>
      </div>
      <div className="menu-item">
        <RiBookletLine className="menu-icon" size={20} color={white} />
        <span className="menu-name" style={{ color: white }}>
          Reports
        </span>
      </div>
      <div className="menu-item active">
        <RiComputerLine className="menu-icon" size={20} color={white} />
        <span className="menu-name" style={{ color: white }}>
          Inside The App
        </span>
      </div>
      <div className="menu-item">
        <RiComputerLine className="menu-icon" size={20} color={white} />
        <span className="menu-name" style={{ color: white }}>
          Natural Language Query
        </span>
      </div>
    </React.Fragment>
  );
};

export default Menu;
