const calculateStoppingDistance = (carSpeed, reactionTime, roadGradient, roadConditions) => {
  const speedInMeters = carSpeed / 3.6;
  const reactionDistance = speedInMeters * reactionTime;
  const brakingDistance = Math.abs((speedInMeters ** 2) / ((2 * 9.8) * (roadConditions + roadGradient)));

  return reactionDistance + brakingDistance;
};

export default calculateStoppingDistance;
