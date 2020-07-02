import React from "react";

import "./Button.css";

const Button = ({ text, handle }) => {
  return <input type="submit" value={text} onClick={handle} />;
};

export default Button;
