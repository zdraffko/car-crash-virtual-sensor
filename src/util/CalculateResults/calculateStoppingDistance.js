const calculateStoppingDistance = (carSpeed, reactionTime, roadGradient, roadConditions) => {
  const speedInMeters = carSpeed / 3.6;
  const reactionDistance = speedInMeters * reactionTime;
  const breakingDistance = (speedInMeters ** 2) / ((2 * 9.8) * (roadConditions + roadGradient));

  return reactionDistance + breakingDistance;
};

export default calculateStoppingDistance;
