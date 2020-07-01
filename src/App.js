import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Apps from "./pages/Apps";
import Inside from "./pages/Inside";

function App(props) {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={(props) => {
          return (
            <React.Fragment>
              <Layout {...props} />
              <Home {...props} />
            </React.Fragment>
          );
        }}
      />
      <Route
        exact
        path="/apps"
        render={(props) => {
          return (
            <React.Fragment>
              <Layout {...props} />
              <Apps {...props} />
            </React.Fragment>
          );
        }}
      />
      <Route
        exact
        path="/inside"
        render={(props) => {
          return (
            <React.Fragment>
              <Layout {...props} />
              <Inside {...props} />
            </React.Fragment>
          );
        }}
      />
    </React.Fragment>
  );
}

export default App;
