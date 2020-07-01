import React from "react";
import "./Card.css";

const Card = (props) => {
  const { children, height, radius } = props;
  return (
    <div className="card" style={{ height, borderRadius: radius }}>
      {children}
    </div>
  );
};

export default Card;
