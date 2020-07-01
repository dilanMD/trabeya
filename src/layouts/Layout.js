import React from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";

const Layout = (props) => {
  console.log("Layout props", props);
  return (
    <React.Fragment>
      <Sidebar {...props} />
      <Header />
      <Breadcrumb prev="Dashboard" current="Inside The App" />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
