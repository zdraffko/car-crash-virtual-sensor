import React from "react";

import SelectSection from "./SelectSection/SelectSection";
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
      <SelectSection
        selectSectionName="hasSeatbelt"
        selectSectionValue={formValues.hasSeatbelt}
        handleOnChange={handleValueChange}
        handleOnBlur={handleBlur}
        isRequired
        validationErrors={validationErrors.hasSeatbelt}
        selectSectionOptions={{ "С колан": 0.2, "Без колан": 0.04 }}
        labelContent="Имаш ли колан?"
      />

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

      <SelectSection
        selectSectionName="reactionTime"
        selectSectionValue={formValues.reactionTime}
        handleOnChange={handleValueChange}
        handleOnBlur={handleBlur}
        isRequired
        validationErrors={validationErrors.reactionTime}
        selectSectionOptions={{
          "много внимателен": 1,
          обикновен: 1.5,
          "изморен / възрастен": 2,
          нетрезвен: 2.5
        }}
        labelContent="Какъв вид шофьор си?"
      />

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

      <SelectSection
        selectSectionName="roadConditions"
        selectSectionValue={formValues.roadConditions}
        handleOnChange={handleValueChange}
        handleOnBlur={handleBlur}
        isRequired
        validationErrors={validationErrors.roadConditions}
        selectSectionOptions={{
          "сух асфалт": 0.92,
          "мокър асфалт": 0.7,
          "заснежен асфалт": 0.2,
          "заледен асфалт": 0.1
        }}
        labelContent="Каква е пътната обстановка?"
      />

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

      <SelectSection
        selectSectionName="roadGradient"
        selectSectionValue={formValues.roadGradient}
        handleOnChange={handleValueChange}
        handleOnBlur={handleBlur}
        isRequired
        validationErrors={validationErrors.roadGradient}
        selectSectionOptions={{
          "без наклон": 0,
          "лек наклон нагоре": 0.1,
          "стръмен наклон нагоре": 0.3,
          "лек наклон надолу": -0.1,
          "стръмен наклон надолу": -0.3
        }}
        labelContent="Какъв е наклона на пътя?"
      />

      <Button buttonType="submit" isSubmitting={isSubmitting}>Изчисли</Button>
    </form>
  </>
);

export default CarCrashForm;
