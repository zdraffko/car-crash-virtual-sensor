const calculateDeceleration = (driverWeight, carCrashSpeed, seatbelt) => {
  const speedInMeters = carCrashSpeed;
  const impactForce = (driverWeight * (speedInMeters ** 2)) / (2 * seatbelt);
  const stoppingTime = (speedInMeters * driverWeight) / impactForce;

  return (speedInMeters / stoppingTime) * 0.101972;
};

export default calculateDeceleration;
