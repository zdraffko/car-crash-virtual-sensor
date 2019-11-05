import countDecimals from "../countDecimals/countDecimals";

const validateForm = (formValues) => {
  const errors = {};

  if (!formValues.driverWeight) {
    errors.driverWeight = "Моля въведи килограми !";
  } else if (Number(formValues.driverWeight) < 0) {
    errors.driverWeight = "Моля въведи положителни килограми !";
  } else if (Number(formValues.driverWeight) === 0) {
    errors.driverWeight = "Моля въведи повече от 0 килограма !";
  } else if (countDecimals(Number(formValues.driverWeight)) > 2) {
    errors.driverWeight = "Моля въведи число до втория знак !";
  }

  if (!formValues.carSpeed) {
    errors.carSpeed = "Моля въведи скорост !";
  } else if (Number(formValues.carSpeed) < 0) {
    errors.carSpeed = "Моля въведи положителна скорост !";
  } else if (Number(formValues.carSpeed) === 0) {
    errors.carSpeed = "Моля въведи скорост по-голяма от 0 !";
  } else if (countDecimals(Number(formValues.carSpeed)) > 2) {
    errors.carSpeed = "Моля въведи число до втория знак !";
  }

  if (!formValues.distanceToObstacle) {
    errors.distanceToObstacle = "Моля въведи разстояние !";
  } else if (Number(formValues.distanceToObstacle) < 0) {
    errors.distanceToObstacle = "Моля въведи положителн разстояние !";
  } else if (Number(formValues.distanceToObstacle) === 0) {
    errors.distanceToObstacle = "Моля въведи разстояние по-голямо от 0 !";
  } else if (countDecimals(Number(formValues.distanceToObstacle)) > 2) {
    errors.distanceToObstacle = "Моля въведи число до втория знак !";
  }

  if (!formValues.hasSeatbelt) {
    errors.hasSeatbelt = "Моля избери една от опциите !";
  }

  if (!formValues.reactionTime) {
    errors.reactionTime = "Моля избери една от опциите !";
  }

  if (!formValues.roadConditions) {
    errors.roadConditions = "Моля избери една от опциите !";
  }

  if (!formValues.roadGradient) {
    errors.roadGradient = "Моля избери една от опциите !";
  }

  return errors;
};

export default validateForm;
