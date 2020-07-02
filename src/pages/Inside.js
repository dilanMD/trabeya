import React from "react";

import "./Common.css";
import Card from "../components/Card/Card";
import PasswordInput from "../components/TextInput/PasswordInput";
import Button from "../components/Button/Button";
import { COLORS } from "../constants/colors";
import AdminImage from "../images/admin.webp";

const Inside = () => {
  const { green, white, grey, text } = COLORS;
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
          <PasswordInput hint="New Password" />
          <PasswordInput hint="Confirm Password" />
          <Button text="Set Password" />
        </Card>
      </div>
    </div>
  );
};

export default Inside;
