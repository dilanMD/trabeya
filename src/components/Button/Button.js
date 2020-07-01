import React from "react";

import "./Button.css";

const Button = ({ text }) => {
  return <input type="submit" value={text} />;
};

export default Button;
