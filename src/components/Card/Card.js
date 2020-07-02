import React from "react";
import { TiThMenu } from "react-icons/ti";

import "./Card.css";
import { COLORS } from "../../constants/colors";

const Card = (props) => {
  const { green } = COLORS;
  const { children, height, radius, toggle, handler } = props;

  return (
    <div className="card" style={{ height, borderRadius: radius }}>
      {toggle && (
        <TiThMenu color={green} size={30} id="menu-toggle" onClick={handler} />
      )}
      {children}
    </div>
  );
};

export default Card;
