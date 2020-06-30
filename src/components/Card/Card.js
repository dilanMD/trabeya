import React from "react";
import "./Card.css";

const Card = (props) => {
  const { children, height } = props;
  return (
    <div className="card" style={{ height }}>
      {children}
    </div>
  );
};

export default Card;
