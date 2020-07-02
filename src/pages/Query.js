import React from "react";

import "./Common.css";
import Card from "../components/Card/Card";
import PasswordInput from "../components/TextInput/PasswordInput";
import Button from "../components/Button/Button";
import { COLORS } from "../constants/colors";
import QueryImage from "../images/sql.webp";

const Query = () => {
  const { green, white, grey, text } = COLORS;
  return (
    <div className="row">
      <div className="col-s-4"></div>
      <div className="col-6">
        <Card radius={20}>
          <img src={QueryImage} alt="Admin" />
          <h5 className="title" style={{ color: green }}>
            Natural Language Query
          </h5>
          <p className="info" style={{ color: grey }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Query;
