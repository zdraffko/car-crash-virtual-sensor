import React from "react";

import Button from "../UI/Button/Button";

import styles from "./CarCrashForm.module.css";

const CarCrashForm = ({
  formValues,
  validationErrors,
  isSubmitting,
  handleValueChange,
  handleBlur,
  handleFormSubmit,
  history
}) => (
  <>
    <h1>Car Crash Virtual Sensor</h1>
    <form className={styles.Form} onSubmit={(event) => handleFormSubmit(event, history)}>
      <div className={styles.selectSection}>
        <select
          name="hasSeatbelt"
          value={formValues.hasSeatbelt}
          onChange={handleValueChange}
          onBlur={handleBlur}
          required
        >
          <option value="" disabled>{}</option>
          <option value>С колан</option>
          <option value={false}>Без колан</option>
        </select>
        <label className={validationErrors.hasSeatbelt ? `${styles.inputLabel} ${styles.errorLabel}` : styles.inputLabel}>
          <span className={validationErrors.hasSeatbelt ? `${styles.labelContent} ${styles.errorContent}` : styles.labelContent}>
            {validationErrors.hasSeatbelt ? validationErrors.hasSeatbelt : "Имаш ли колан?"}
          </span>
        </label>
      </div>

      <div className={styles.inputSection}>

        <input
          name="driverWeight"
          type="number"
          value={formValues.driverWeight}
          onChange={handleValueChange}
          onBlur={handleBlur}
          min={1}
          required
          step={0.01}
        />
        <label className={validationErrors.driverWeight ? `${styles.inputLabel} ${styles.errorLabel}` : styles.inputLabel}>
          <span className={validationErrors.driverWeight ? `${styles.labelContent} ${styles.errorContent}` : styles.labelContent}>
            {validationErrors.driverWeight ? validationErrors.driverWeight : "Какво е теглото ти?"}
          </span>
        </label>
      </div>

      <div className={styles.selectSection}>
        <select
          name="reactionTime"
          value={formValues.reactionTime}
          onChange={handleValueChange}
          onBlur={handleBlur}
          required
        >
          <option value="" disabled>{}</option>
          <option value={1}>много внимателен</option>
          <option value={1.5}>обикновен</option>
          <option value={2}>изморен / възрастен</option>
          <option value={2.5}>нетрезвен</option>
        </select>
        <label className={validationErrors.reactionTime ? `${styles.inputLabel} ${styles.errorLabel}` : styles.inputLabel}>
          <span className={validationErrors.reactionTime ? `${styles.labelContent} ${styles.errorContent}` : styles.labelContent}>
            {validationErrors.reactionTime ? validationErrors.reactionTime : "Какъв вид шофьор си?"}
          </span>
        </label>
      </div>
      <div className={styles.inputSection}>

        <input
          name="carSpeed"
          type="number"
          value={formValues.carSpeed}
          onChange={handleValueChange}
          onBlur={handleBlur}
          min={1}
          required
          step={0.01}
        />
        <label className={validationErrors.carSpeed ? `${styles.inputLabel} ${styles.errorLabel}` : styles.inputLabel}>
          <span className={validationErrors.carSpeed ? `${styles.labelContent} ${styles.errorContent}` : styles.labelContent}>
            {validationErrors.carSpeed ? validationErrors.carSpeed : "Каква е скоростта на колата?"}
          </span>
        </label>
      </div>

      <div className={styles.selectSection}>
        <select
          name="roadConditions"
          value={formValues.roadConditions}
          onChange={handleValueChange}
          onBlur={handleBlur}
          required
        >
          <option value="" disabled>{}</option>
          <option value={0.92}>сух асфалт</option>
          <option value={0.7}>мокър асфалт</option>
          <option value={0.2}>заснежен асфалт</option>
          <option value={0.1}>заледен асфалт</option>
        </select>
        <label className={validationErrors.roadConditions ? `${styles.inputLabel} ${styles.errorLabel}` : styles.inputLabel}>
          <span className={validationErrors.roadConditions
            ? `${styles.labelContent} ${styles.errorContent}` : styles.labelContent}
          >
            {validationErrors.roadConditions ? validationErrors.roadConditions : "Каква е пътната обстановка?"}
          </span>
        </label>
      </div>

      <div className={styles.inputSection}>

        <input
          name="distanceToObstacle"
          type="number"
          value={formValues.distanceToObstacle}
          onChange={handleValueChange}
          onBlur={handleBlur}
          min={1}
          required
          step={0.01}
        />
        <label className={validationErrors.distanceToObstacle
          ? `${styles.inputLabel} ${styles.errorLabel}` : styles.inputLabel}
        >
          <span className={validationErrors.distanceToObstacle
            ? `${styles.labelContent} ${styles.errorContent}` : styles.labelContent}
          >
            {
              validationErrors.distanceToObstacle
                ? validationErrors.distanceToObstacle : "Колко метра има до сблъсъка?"
            }
          </span>
        </label>
      </div>

      <div className={styles.selectSection}>
        <select
          name="roadGradient"
          value={formValues.roadGradient}
          onChange={handleValueChange}
          onBlur={handleBlur}
          required
        >
          <option value="" disabled>{}</option>
          <option value={0}>без наклон</option>
          <option value={0.1}>лек наклон нагоре</option>
          <option value={0.3}>стръмен наклон нагоре</option>
          <option value={-0.1}>лек наклон надолу</option>
          <option value={-0.3}>стръмен наклон надолу</option>
        </select>
        <label className={validationErrors.roadGradient ? `${styles.inputLabel} ${styles.errorLabel}` : styles.inputLabel}>
          <span className={validationErrors.roadGradient ? `${styles.labelContent} ${styles.errorContent}` : styles.labelContent}>
            {validationErrors.roadGradient ? validationErrors.roadGradient : "Какъв е наклона на пътя?"}
          </span>
        </label>
      </div>
      <Button buttonType="submit" isSubmitting={isSubmitting}>Изчисли</Button>
    </form>
  </>
);

export default CarCrashForm;
