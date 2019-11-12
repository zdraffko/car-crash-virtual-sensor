import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import CarCrashForm from "./components/CarCrashForm/CarCrashForm";
import CarCrashResults from "./components/CarCrashResults/CarCrashResults";
import NavBar from "./components/Navigation/NavBar/NavBar";

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
      <NavBar />
      <div className="VirtualSensor">
        <Switch>
          <Route
            path="/car-crash-virtual-sensor"
            render={(routProps) => <CarCrashForm {...formValidationObject} {...routProps} />}
          />
          <Route
            path="/car-crash-results"
            render={(routProps) => (
              <CarCrashResults
                {...formValidationObject.formValues}
                {...routProps}
                resetForm={formValidationObject.handleFormReset}
              />
            )}
          />
          <Redirect exact path="/" to="/car-crash-virtual-sensor" />
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
