import React, { useEffect } from "react";

import calculateStoppingDistance from "../../util/CalculateResults/calculateStoppingDistance";
import calculateCarCrashSpeed from "../../util/CalculateResults/calculateCarCrashSpeed";

const CarCrashResults = ({ carSpeed, reactionTime, roadGradient, roadConditions, distanceToObstacle }) => {
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
    <h1>Results</h1>
  );
};

export default CarCrashResults;
