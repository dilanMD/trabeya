import React from "react";

import "./Breadcrumb.css";
import { COLORS } from "../constants/colors";

const Breadcrumb = ({ prev, current }) => {
  const { green, white, grey } = COLORS;

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-4">
          <span className="current-page" style={{ color: green }}>
            {current}
          </span>
          <span
            className="full-path"
            style={{ color: grey }}
          >{`${prev} / ${current}`}</span>
        </div>
        <div className="col-2"></div>
      </div>
    </React.Fragment>
  );
};

export default Breadcrumb;
