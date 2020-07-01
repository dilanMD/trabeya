import React from "react";
import { RiLockUnlockLine } from "react-icons/ri";

import "./PasswordInput.css";
import { COLORS } from "../../constants/colors";

const PasswordInput = ({ hint, disabled }) => {
  const { grey } = COLORS;
  return (
    <div className="password-input-container">
      <RiLockUnlockLine size={20} color={grey} className="icon" />
      <input type="password" placeholder={hint} disabled={disabled} />
    </div>
  );
};

export default PasswordInput;
