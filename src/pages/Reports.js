import React from "react";

import "./Common.css";
import Card from "../components/Card/Card";
import PasswordInput from "../components/TextInput/PasswordInput";
import Button from "../components/Button/Button";
import { COLORS } from "../constants/colors";
import ReportImage from "../images/reports.png";

const Reports = () => {
  const { green, white, grey, text } = COLORS;
  return (
    <div className="row">
      <div className="col-s-4"></div>
      <div className="col-6">
        <Card radius={20}>
          <img src={ReportImage} alt="Admin" width="200" />
          <h5 className="title" style={{ color: green }}>
            Reports
          </h5>
          <p className="info" style={{ color: grey }}>
            Welcome to reports page
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Reports;
