import calculateStoppingDistance from "./calculateStoppingDistance";
import calculateCarCrashSpeed from "./calculateCarCrashSpeed";
import calculateDeceleration from "./calculateDeceleration";
import calculateDeathProbability from "./calculateDeathProbability";

const calculateResults = (carSpeed,
  reactionTime,
  roadGradient,
  roadConditions,
  distanceToObstacle,
  driverWeight,
  hasSeatbelt) => {
  let hasCrashed = false;

  const stoppingDistance = Math.abs(calculateStoppingDistance(
    Number(carSpeed),
    Number(reactionTime),
    Number(roadGradient),
    Number(roadConditions)
  ));

  if (stoppingDistance <= distanceToObstacle) {
    return { stoppingDistance, hasCrashed, carCrashSpeed: 0, deathProbability: 0 };
  }

  hasCrashed = true;

  const carCrashSpeed = calculateCarCrashSpeed(
    Number(carSpeed),
    Number(reactionTime),
    Number(distanceToObstacle)
  );

  const deceleration = calculateDeceleration(Number(driverWeight), carCrashSpeed, Number(hasSeatbelt));

  const deathProbability = calculateDeathProbability(deceleration);

  return { stoppingDistance, hasCrashed, carCrashSpeed, deceleration, deathProbability };
};

export default calculateResults;
