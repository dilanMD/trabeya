import React from "react";

import "./Common.css";
import Card from "../components/Card/Card";
import PasswordInput from "../components/TextInput/PasswordInput";
import Button from "../components/Button/Button";
import { COLORS } from "../constants/colors";
import AppsImage from "../images/apps.png";

const Apps = () => {
  const { green, white, grey, text } = COLORS;
  return (
    <div className="row">
      <div className="col-s-4"></div>
      <div className="col-6">
        <Card radius={20}>
          <img src={AppsImage} alt="Admin" />
          <h5 className="title" style={{ color: green }}>
            Trabeya Store
          </h5>
          <p className="info" style={{ color: grey }}>
            A mobile application, also referred to as a mobile app or simply an
            app, is a computer program or software application designed to run
            on a mobile device such as a phone, tablet, or watch.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Apps;
