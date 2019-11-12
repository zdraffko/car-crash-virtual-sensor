import React from "react";

import SelectSection from "./SelectSection/SelectSection";
import InputSection from "./InputSection/InputSection";
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
    <h1>Виртуален Сензор</h1>
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

      <InputSection
        inputSectionName="driverWeight"
        inputSectionType="number"
        inputSectionValue={formValues.driverWeight}
        handleOnChange={handleValueChange}
        handleOnBlur={handleBlur}
        inputSectionMinValue={1}
        inputSectionStep={0.1}
        isRequired
        validationErrors={validationErrors.driverWeight}
        labelContent="Какво е теглото ти?"
      />

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

      <InputSection
        inputSectionName="carSpeed"
        inputSectionType="number"
        inputSectionValue={formValues.carSpeed}
        handleOnChange={handleValueChange}
        handleOnBlur={handleBlur}
        inputSectionMinValue={1}
        inputSectionStep={0.1}
        isRequired
        validationErrors={validationErrors.carSpeed}
        labelContent="Каква е скоростта на колата?"
      />

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

      <InputSection
        inputSectionName="distanceToObstacle"
        inputSectionType="number"
        inputSectionValue={formValues.distanceToObstacle}
        handleOnChange={handleValueChange}
        handleOnBlur={handleBlur}
        inputSectionMinValue={1}
        inputSectionStep={0.1}
        isRequired
        validationErrors={validationErrors.distanceToObstacle}
        labelContent="Колко метра има до сблъсъка?"
      />

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
