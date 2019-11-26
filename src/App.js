import React, { useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import CarCrashHome from "./components/CarCrashHome/CarCrashHome";
import CarCrashForm from "./components/CarCrashForm/CarCrashForm";
import CarCrashResults from "./components/CarCrashResults/CarCrashResults";
import CarCrashDocumentation from "./components/CarCrashDocumentation/CarCrashDocumentation";
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
      <BurgerMenu toggleSideDrawer={() => setIsSideDrawerOpen((prevState) => !prevState)} isOpen={isSideDrawerOpen} />
      <SideDrawer isOpen={isSideDrawerOpen} closeSideDrawer={() => setIsSideDrawerOpen(false)} />
      <NavBar />
      <div className="VirtualSensor">
        <Switch>
          <Route
            path="/home"
            render={(routProps) => (
              <CarCrashHome
                {...routProps}
                resetForm={formValidationObject.handleFormReset}
              />
            )}
          />
          <Route
            path="/virtual-sensor"
            render={(routProps) => <CarCrashForm {...formValidationObject} {...routProps} />}
          />
          <Route
            path="/results"
            render={(routProps) => (
              <CarCrashResults
                {...formValidationObject.formValues}
                {...routProps}
                resetForm={formValidationObject.handleFormReset}
              />
            )}
          />
          <Route path="/documentation" component={CarCrashDocumentation} />
          <Redirect exact path="/" to="/home" />
          <Redirect exact path="/car-crash-virtual-sensor/" to="/home" />
          <Route render={() => <h1>Error 404</h1>} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
