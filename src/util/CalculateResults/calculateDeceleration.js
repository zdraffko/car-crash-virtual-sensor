const calculateDeceleration = (driverWeight, carCrashSpeed, seatbelt) => {
  const impactForce = (driverWeight * (carCrashSpeed ** 2)) / (2 * seatbelt);
  const stoppingTime = (carCrashSpeed * driverWeight) / impactForce;

  return [(carCrashSpeed / stoppingTime) * 0.101972, impactForce];
};

export default calculateDeceleration;
