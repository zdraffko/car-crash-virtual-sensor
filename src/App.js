import React, { useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import CarCrashForm from "./components/CarCrashForm/CarCrashForm";
import CarCrashResults from "./components/CarCrashResults/CarCrashResults";
import BurgerMenu from "./components/Navigation/BurgerMenu/BurgerMenu";
import SideDrawer from "./components/Navigation/SideDrawer/SideDrawer";
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
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);
  return (
    <div className="App">
      <BurgerMenu toggleSideDrawer={() => setIsSideDrawerOpen((prevState) => !prevState)} />
      <SideDrawer isOpen={isSideDrawerOpen} />
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
