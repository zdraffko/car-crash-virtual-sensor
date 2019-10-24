import React from "react";

import useFormValidation from "../../hooks/useFormValidation";
import validateForm from "../../util/validateForm";

import styles from "./CarCrashForm.module.css";

const initialFormState = {
  hasSeatbelt: true,
  driverWeight: "",
  reactionTime: 1,
  carSpeed: "",
  roadConditions: 0.97,
  roadGradient: 10,
  distanceToObstacle: "",
};

const CarCrashForm = () => {
  const {
    formValues,
    validationErrors,
    isSubmitting,
    handleValueChange,
    handleBlur,
    handleFormSubmit
  } = useFormValidation(initialFormState, validateForm);

  return (
    <form className={styles.Form} onSubmit={handleFormSubmit}>
      <label>Колан</label>
      <select name="hasSeatbelt" value={formValues.hasSeatbelt} onChange={handleValueChange}>
        <option value>С колан</option>
        <option value={false}>Без колан</option>
      </select>

      <div className={styles.inputSection}>

        {/* {validationErrors.driverWeight && <p className={styles.errorMessage}>{validationErrors.driverWeight}</p>} */}
        <input
          name="driverWeight"
          className={validationErrors.driverWeight && styles.errorInput}
          type="number"
          value={formValues.driverWeight}
          onChange={handleValueChange}
          onBlur={handleBlur}
          required
        />
        <label className={styles.inputLabel}><span className={styles.labelContent}>Тегло на шофьора</span></label>
      </div>

      <label>Време за реакция</label>
      <select name="reactionTime" value={formValues.reactionTime} onChange={handleValueChange}>
        <option value="">И</option>
        <option value={1}>1 секунда - много внимателен шофьор</option>
        <option value={1.5}>1.5 секунди - обикновен шофьор</option>
        <option value={2}>2 секунди - изморен или възрастен шофьор</option>
        <option value={2.5}>2.5 секунди - нетрезвен шофьор</option>
      </select>

      <div className={styles.inputSection}>

        {/* {validationErrors.carSpeed && <p className={styles.errorMessage}>{validationErrors.carSpeed}</p>} */}
        <input
          name="carSpeed"
          className={validationErrors.driverWeight && styles.errorInput}
          type="number"
          value={formValues.carSpeed}
          onChange={handleValueChange}
          onBlur={handleBlur}
          required
        />
        <label className={styles.inputLabel}><span className={styles.labelContent}>Скорост на колата</span></label>
      </div>

      <label>Пътна обстановка</label>
      <select name="roadConditions" value={formValues.roadConditions} onChange={handleValueChange}>
        <option value={0.97}>сух асфалт</option>
        <option value={0.7}>мокър асфалт</option>
        <option value={0.2}>заснежен асфалт</option>
        <option value={0.1}>заледен асфалт</option>
      </select>

      <label>Наклон на пътя</label>
      <select name="roadGradient" value={formValues.roadGradient} onChange={handleValueChange}>
        <option value={10}>лек наклон нагоре</option>
        <option value={30}>стръмен наклон нагоре</option>
        <option value={-10}>лек наклон надолу</option>
        <option value={-30}>стръмен наклон надолу</option>
      </select>

      <div className={styles.inputSection}>

        {/* {validationErrors.distanceToObstacle && <p className={styles.errorMessage}>{validationErrors.distanceToObstacle}</p>} */}
        <input
          name="distanceToObstacle"
          className={validationErrors.driverWeight && styles.errorInput}
          type="number"
          value={formValues.distanceToObstacle}
          onChange={handleValueChange}
          onBlur={handleBlur}
          required
        />
        <label className={styles.inputLabel}><span className={styles.labelContent}>Разстояние до сблъсък</span></label>
      </div>
      <button type="submit" disabled={isSubmitting}>Изчисли</button>
    </form>
  );
};

export default CarCrashForm;
