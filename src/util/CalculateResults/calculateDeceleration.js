const calculateDeceleration = (driverWeight, carCrashSpeed, seatbelt) => {
  const impactForce = (driverWeight * (carCrashSpeed ** 2)) / (2 * seatbelt);
  console.log(`impact force: ${impactForce}`);

  const stoppingTime = (carCrashSpeed * driverWeight) / impactForce;
  return (carCrashSpeed / stoppingTime) * 0.101972;
};

export default calculateDeceleration;
