import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import CarCrashForm from "./components/CarCrashForm/CarCrashForm";
import CarCrashResults from "./components/CarCrashResults/CarCrashResults";

import "./App.css";

const App = () => (
  <div className="App">
    <h1>Car Crash Virtual Sensor</h1>
    <Switch>
      <Route path="/car-crash-form" component={CarCrashForm} />
      <Route path="/car-crash-results" component={CarCrashResults} />
      <Redirect exact path="/" to="/car-crash-form" />
      <Route render={() => <h1>404</h1>} />
    </Switch>
  </div>
);

export default App;
