import React, { useEffect } from "react";

import calculateStoppingDistance from "../../util/CalculateResults/calculateStoppingDistance";
import calculateCarCrashSpeed from "../../util/CalculateResults/calculateCarCrashSpeed";
import Button from "../UI/Button/Button";

const CarCrashResults = ({ carSpeed, reactionTime, roadGradient, roadConditions, distanceToObstacle, history }) => {
  useEffect(() => {
    const stoppingDistance = calculateStoppingDistance(
      Number(carSpeed),
      Number(reactionTime),
      Number(roadGradient),
      Number(roadConditions)
    );
    console.log(`stopping distance ${stoppingDistance}`);
    if (stoppingDistance > distanceToObstacle) {
      const carCrashSpeed = calculateCarCrashSpeed(Number(carSpeed), Number(reactionTime), Number(distanceToObstacle));
      console.log(`car crash speed ${carCrashSpeed}`);
    }
  }, [carSpeed, distanceToObstacle, reactionTime, roadConditions, roadGradient]);
  return (
    <>
      <h1>Results</h1>
      <Button
        buttonType="button"
        onClick={() => history.push("/car-crash-form")}
      >Ново изчисление
      </Button>
    </>
  );
};

export default CarCrashResults;
