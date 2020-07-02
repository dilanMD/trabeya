import React, { useState, useEffect } from "react";

import "./TimeWidget.css";
import { getDateFormat } from "../../helpers/DateTime";

const TimeWidget = () => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    setInterval(() => {
      setTime(getDateFormat());
    }, 1000);
  });

  return time !== null && <div className="time-widget-container">{time}</div>;
};

export default TimeWidget;
