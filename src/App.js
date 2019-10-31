import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import CarCrashForm from "./components/CarCrashForm/CarCrashForm";
import CarCrashResults from "./components/CarCrashResults/CarCrashResults";

import useFormValidation from "./hooks/useFormValidation";
import validateForm from "./util/ValidateForm/validateForm";
import "./App.css";

const initialFormState = {
  hasSeatbelt: "",
  driverWeight: "",
  reactionTime: "",
  carSpeed: "",
  roadConditions: "",
  roadGradient: "",
  distanceToObstacle: "",
};

const App = () => {
  const formValidationObject = useFormValidation(initialFormState, validateForm);

  return (
    <div className="App">
      <Switch>
        <Route
          path="/car-crash-virtual-sensor"
          render={(routProps) => <CarCrashForm {...formValidationObject} {...routProps} />}
        />
        <Route
          path="/car-crash-results"
          render={(routProps) => <CarCrashResults {...formValidationObject.formValues} {...routProps} />}
        />
        <Redirect exact path="/" to="/car-crash-virtual-sensor" />
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </div>
  );
};

export default App;
