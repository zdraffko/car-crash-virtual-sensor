import React from "react";

import CarCrashForm from "./components/CarCrashForm/CarCrashForm";
import "./App.css";

const App = () => {
  const handleCarCrashFormSubmit = () => {

  };

  return (
    <div className="App">
       Car Crash Virtual Sensor
      <CarCrashForm handleSubmit={handleCarCrashFormSubmit} />
    </div>
  );
};

export default App;
