import React from "react";

import useFormValidation from "../../hooks/useFormValidation";

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
  const { formValues, handleValueChange } = useFormValidation(initialFormState);

  return (
    <form className={styles.Form} onSubmit={(event) => { event.preventDefault(); console.log(formValues); }}>
      <label>Колан</label>
      <select name="hasSeatbelt" value={formValues.hasSeatbelt} onChange={handleValueChange}>
        <option value>С колан</option>
        <option value={false}>Без колан</option>
      </select>

      <label>Тегло на шофьора</label>
      <input
        name="driverWeight"
        type="number"
        value={formValues.driverWeight}
        onChange={handleValueChange}
        placeholder="кг"
      />

      <label>Време за реакция</label>
      <select name="reactionTime" value={formValues.reactionTime} onChange={handleValueChange}>
        <option value="">И</option>
        <option value={1}>1 секунда - много внимателен шофьор</option>
        <option value={1.5}>1.5 секунди - обикновен шофьор</option>
        <option value={2}>2 секунди - изморен или възрастен шофьор</option>
        <option value={2.5}>2.5 секунди - нетрезвен шофьор</option>
      </select>

      <label>Скорост на колата</label>
      <input
        name="carSpeed"
        type="number"
        value={formValues.carSpeed}
        onChange={handleValueChange}
        placeholder="км/ч"
      />

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

      <label>Разстояние до мястото на евентуален сблъсък</label>
      <input
        name="distanceToObstacle"
        type="number"
        value={formValues.distanceToObstacle}
        onChange={handleValueChange}
        placeholder="в метри"
      />

      <button type="submit">Изчисли</button>
    </form>
  );
};

export default CarCrashForm;
