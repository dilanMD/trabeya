import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Apps from "./pages/Apps";
import Inside from "./pages/Inside";
import Profile from "./pages/Profile";
import Reports from "./pages/Reports";
import Query from "./pages/Query";

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
        path="/profile"
        render={(props) => {
          return (
            <React.Fragment>
              <Layout {...props} />
              <Profile {...props} />
            </React.Fragment>
          );
        }}
      />
      <Route
        exact
        path="/reports"
        render={(props) => {
          return (
            <React.Fragment>
              <Layout {...props} />
              <Reports {...props} />
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
      <Route
        exact
        path="/query"
        render={(props) => {
          return (
            <React.Fragment>
              <Layout {...props} />
              <Query {...props} />
            </React.Fragment>
          );
        }}
      />
    </React.Fragment>
  );
}

export default App;
