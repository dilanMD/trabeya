import React from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Breadcrumb from "./Breadcrumb";

const Layout = (props) => {
  console.log("Layout props", props);
  return (
    <React.Fragment>
      <Sidebar {...props} />
      <Header />
      <Breadcrumb prev="Dashboard" current="Inside The App" />
    </React.Fragment>
  );
};

export default Layout;
