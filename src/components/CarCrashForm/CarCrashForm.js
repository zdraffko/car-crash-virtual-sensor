import React, { useState } from "react";

import styles from "./CarCrashForm.module.css";

const CarCrashForm = ({ handleSubmit }) => {
  const [hasSeatbelt, setHasSeatbelt] = useState(true);
  const [driverWeight, setDriverWeight] = useState("");
  const [reactionTime, setReactionTime] = useState(1);
  const [carSpeed, setCarSpeed] = useState("");
  const [roadConditions, setRoadConditions] = useState(0.97);
  const [roadGradient, setRoadGradient] = useState(10);
  const [distanceToObstacle, setDistanceToObstacle] = useState("");

  return (
    <form className={styles.Form} onSubmit={handleSubmit}>
      <label>Колан</label>
      <select name="seatbelt-options" value={hasSeatbelt} onChange={(event) => setHasSeatbelt(event.target.value)}>
        <option value>С колан</option>
        <option value={false}>Без колан</option>
      </select>

      <label>Тегло на шофьора</label>
      <input
        type="number"
        value={driverWeight}
        onChange={(event) => setDriverWeight(event.target.value)}
        placeholder="кг"
      />

      <label>Време за реакция</label>
      <select name="reaction-time-options" value={reactionTime} onChange={(event) => setReactionTime(event.target.value)}>
        <option value="">И</option>
        <option value={1}>1 секунда - много внимателен шофьор</option>
        <option value={1.5}>1.5 секунди - обикновен шофьор</option>
        <option value={2}>2 секунди - изморен или възрастен шофьор</option>
        <option value={2.5}>2.5 секунди - нетрезвен шофьор</option>
      </select>

      <label>Скорост на колата</label>
      <input
        type="number"
        value={carSpeed}
        onChange={(event) => setCarSpeed(event.target.value)}
        placeholder="км/ч"
      />

      <label>Пътна обстановка</label>
      <select name="road-conditions" value={roadConditions} onChange={(event) => setRoadConditions(event.target.value)}>
        <option value={0.97}>сух асфалт</option>
        <option value={0.7}>мокър асфалт</option>
        <option value={0.2}>заснежен асфалт</option>
        <option value={0.1}>заледен асфалт</option>
      </select>

      <label>Наклон на пътя</label>
      <select name="road-gradient" value={roadGradient} onChange={(event) => setRoadGradient(event.target.value)}>
        <option value={10}>лек наклон нагоре</option>
        <option value={30}>стръмен наклон нагоре</option>
        <option value={-10}>лек наклон надолу</option>
        <option value={-30}>стръмен наклон надолу</option>
      </select>

      <label>Разстояние до мястото на евентуален сблъсък</label>
      <input
        type="number"
        value={distanceToObstacle}
        onChange={(event) => setDistanceToObstacle(event.target.value)}
        placeholder="в метри"
      />

      <button type="submit">Изчисли</button>
    </form>
  );
};
export default CarCrashForm;
