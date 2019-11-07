const calculateDeceleration = (driverWeight, carCrashSpeed, seatbelt) => {
  const speedInMeters = carCrashSpeed / 3.6;
  const impactForce = (driverWeight * speedInMeters ** 2) / (2 * seatbelt);
  const stoppingTime = (speedInMeters * driverWeight) / impactForce;

  return (speedInMeters / stoppingTime) * 0.101972;
};

export default calculateDeceleration;
