import React from "react";

import "./Common.css";
import Card from "../components/Card/Card";
import { COLORS } from "../constants/colors";
import HomeImage from "../images/home.png";

const Home = () => {
  const { green, white, grey, text } = COLORS;
  return (
    <div className="row">
      <div className="col-s-4"></div>
      <div className="col-6">
        <Card radius={20}>
          <img src={HomeImage} alt="Admin" />
          <h5 className="title" style={{ color: green }}>
            Welcome to Trabeya!
          </h5>
          <p className="info" style={{ color: grey }}>
            Trabeya is an advanced data analytics and artificial intelligence
            company which services a global client base operating across a
            diverse set of industries. Trabeya combines the internal market and
            product expertise of our clients with cutting-edge analytical
            solutions. With our open and innovative culture, Trabeya is focused
            on delivering world-class solutions by combining people, processes,
            and technologies to help businesses extend human intelligence with
            transformative data-driven analytics for optimised decision-making.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Home;
