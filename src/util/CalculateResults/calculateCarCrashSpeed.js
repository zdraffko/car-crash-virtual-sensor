const calculateCarCrashSpeed = (carSpeed, reactionTime, distanceToObstacle, roadConditions) => {
  const speedInMeters = carSpeed / 3.6;
  const rateOfDeceleration = roadConditions * 9.8;
  const reactionDistance = speedInMeters * reactionTime;

  if (distanceToObstacle - reactionDistance > 0) {
    const d = distanceToObstacle - reactionDistance;
    return Math.sqrt(Math.abs((speedInMeters ** 2) - 2 * rateOfDeceleration * d));
  }

  return speedInMeters;
};

export default calculateCarCrashSpeed;
