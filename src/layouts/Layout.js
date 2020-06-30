import React from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <Header />
    </React.Fragment>
  );
};

export default Layout;
