import React from "react";
import { RiLockUnlockLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";

import "./PasswordInput.css";
import { COLORS } from "../../constants/colors";
import { AUTH_TYPES } from "../../constants/authTypes";

const PasswordInput = ({ hint, disabled, authType }) => {
  const { grey } = COLORS;
  const { CHANGE_PASSWORD, SET_NEW_PWD, SET_CONFIRM_PWD } = AUTH_TYPES;
  const auth = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChange = (e, type) => {
    e.preventDefault();
    dispatch({
      type,
      payload: e.target.value,
    });
  };

  return (
    <div className="password-input-container">
      <RiLockUnlockLine size={20} color={grey} className="icon" />
      <input
        type="password"
        placeholder={hint}
        disabled={disabled}
        onChange={(e) => handleChange(e, authType)}
      />
    </div>
  );
};

export default PasswordInput;
