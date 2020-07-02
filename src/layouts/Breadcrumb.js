import React, { useState, useEffect } from "react";

import "./Breadcrumb.css";
import { COLORS } from "../constants/colors";

const Breadcrumb = ({ prev, current }) => {
  const { green, white, grey } = COLORS;

  return (
    <div className="row">
      <div className="col-s-4"></div>
      <div className="col-4">
        <span className="current-page" style={{ color: green }}>
          {current}
        </span>
        <span
          className="full-path"
          style={{ color: grey }}
        >{`${prev} / ${current}`}</span>
      </div>
    </div>
  );
};

export default Breadcrumb;
