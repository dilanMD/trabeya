import React, { useState, useEffect } from "react";

import "./Breadcrumb.css";
import { COLORS } from "../constants/colors";

const Breadcrumb = ({ prev, current }) => {
  const { green, white, grey } = COLORS;
  const [currentPage, setCurrentPage] = useState(null);

  const CURRENT_PAGE = {
    home: "Home",
    apps: "Apps",
    profile: "Profile",
    reports: "Reports",
    inside: "Inside The App",
    query: "Natural Language Query",
  };

  useEffect(() => {
    setCurrentPage(CURRENT_PAGE.current);
    console.log("current", currentPage);
  }, [current]);

  return (
    <div className="row">
      <div className="col-s-4"></div>
      <div className="col-4">
        <span className="current-page" style={{ color: green }}>
          {CURRENT_PAGE.inside}
        </span>
        <span
          className="full-path"
          style={{ color: grey }}
        >{`${prev} / ${CURRENT_PAGE.inside}`}</span>
      </div>
    </div>
  );
};

export default Breadcrumb;
