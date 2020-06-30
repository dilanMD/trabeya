import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Apps from "./pages/Apps";

function App(props) {
  return (
    <React.Fragment>
      <Layout />
      <Route
        exact
        path="/"
        render={(props) => {
          return <Home />;
        }}
      />
      <Route
        exact
        path="/apps"
        render={(props) => {
          return <Apps />;
        }}
      />
    </React.Fragment>
  );
}

export default App;
