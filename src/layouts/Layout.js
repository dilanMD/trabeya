import React, { useState, useEffect } from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";
import { getActiveMenu } from "../helpers/SidebarHelper";
import { makeFirstLetterCapital } from "../helpers/Strings";

const Layout = (props) => {
  const { path } = props.match;
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    setActiveMenu(getActiveMenu(path));
  });

  return (
    <React.Fragment>
      <Sidebar activeMenu={activeMenu} />
      <Header />
      <Breadcrumb
        prev="Dashboard"
        current={activeMenu !== null && makeFirstLetterCapital(activeMenu)}
      />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
