const validateForm = (formValues) => {
  const errors = {};

  if (!formValues.driverWeight) {
    errors.driverWeight = "Моля въведи килограми";
  } else if (Number(formValues.driverWeight) < 0) {
    errors.driverWeight = "Моля въведи положителни килограми";
  } else if (Number(formValues.driverWeight) === 0) {
    errors.driverWeight = "Моля въведи повече от 0 килограма";
  }

  if (!formValues.carSpeed) {
    errors.carSpeed = "Моля въведи скорост";
  } else if (Number(formValues.carSpeed) < 0) {
    errors.carSpeed = "Моля въведи положителна скорост";
  } else if (Number(formValues.carSpeed) === 0) {
    errors.carSpeed = "Моля въведи скорост по-голяма от 0";
  }

  if (!formValues.distanceToObstacle) {
    errors.distanceToObstacle = "Моля въведи разстояние";
  } else if (Number(formValues.distanceToObstacle) < 0) {
    errors.distanceToObstacle = "Моля въведи положителн разстояние";
  } else if (Number(formValues.distanceToObstacle) === 0) {
    errors.distanceToObstacle = "Моля въведи разстояние по-голямо от 0";
  }

  return errors;
};

export default validateForm;
