import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./Common.css";
import Card from "../components/Card/Card";
import PasswordInput from "../components/TextInput/PasswordInput";
import Button from "../components/Button/Button";
import { COLORS } from "../constants/colors";
import { AUTH_TYPES } from "../constants/authTypes";
import AdminImage from "../images/admin.png";

const Inside = () => {
  const { green, white, grey, text } = COLORS;
  const { CHANGE_PASSWORD, SET_NEW_PWD, SET_CONFIRM_PWD } = AUTH_TYPES;
  const auth = useSelector((state) => state);
  const { newPassword, confirmPassword } = auth;
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleButton = () => {
    if (newPassword.length < 6) {
      setError(`Password must be 6 characters in length`);
    } else {
      if (newPassword !== confirmPassword) {
        setError(`New and Confirm Password doesn't match`);
      } else {
        setSuccess(`Password changed`);
      }
    }
  };

  useEffect(() => {
    setError(null);
    setSuccess(null);
  }, [newPassword, confirmPassword]);

  return (
    <div className="row">
      <div className="col-s-4"></div>
      <div className="col-6">
        <Card radius={20}>
          <img src={AdminImage} alt="Admin" width="200" />
          <h5 className="title" style={{ color: green }}>
            Inside The App
          </h5>
          <p className="info" style={{ color: grey }}>
            Enter the new password then your password will change! Don't forgot
            again
          </p>
          <PasswordInput hint="Old Password" disabled />
          <PasswordInput hint="New Password" authType={SET_NEW_PWD} />
          <PasswordInput hint="Confirm Password" authType={SET_CONFIRM_PWD} />
          {error !== null && <h6 className="error">{error}</h6>}
          {success !== null && <h6 className="success">{success}</h6>}
          <Button text="Set Password" handle={handleButton} />
        </Card>
      </div>
    </div>
  );
};

export default Inside;
