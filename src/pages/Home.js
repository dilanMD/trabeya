import React from "react";

import Card from "../components/Card/Card";

const Home = (props) => {
  console.log(props);
  return (
    <div className="row">
      <div className="col-4"></div>
      <div className="col-6">
        <Card>Col</Card>
      </div>
      <div className="col-2"></div>
    </div>
  );
};

export default Home;
