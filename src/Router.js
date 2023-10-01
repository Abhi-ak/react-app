import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import Login from "./pages/Login/component";
import HomePage from "./pages/HomePage/component";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route element={<Login />} path="/" />
        <Route element={<HomePage />} path="/dashboard" />
      </Switch>
    </Router>
  );
};

export default Routes;
