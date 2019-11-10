const calculateStoppingDistance = (carSpeed, reactionTime, roadGradient, roadConditions) => {
  const speedInMeters = carSpeed / 3.6;
  const reactionDistance = speedInMeters * reactionTime;
  console.log(`reaction distance ${reactionDistance}`);
  const breakingDistance = Math.abs((speedInMeters ** 2) / ((2 * 9.8) * (roadConditions + roadGradient)));
  console.log(`breaking distance ${breakingDistance}`);
  return reactionDistance + breakingDistance;
};

export default calculateStoppingDistance;
