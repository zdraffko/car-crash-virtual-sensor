import React from "react";

import styles from "./Form.module.css";

const Form = () => (
  <form className={styles.Form}>
    <label>Колан</label>
    <select name="seatbelt-options">
      <option>С колан</option>
      <option>Без колан</option>
    </select>

    <label>Тегло на шофьора</label>
    <input type="number" min={1} placeholder="кг" />

    <label>Време за реакция</label>
    <select name="seatbelt-options">
      <option value={1}>1 секунда - много внимателен шофьор</option>
      <option value={1.5}>1.5 секунди - обикновен шофьор</option>
      <option value={2}>2 секунди - изморен или възрастен шофьор</option>
      <option value={2.5}>2.5 секунди - нетрезвен шофьор</option>
    </select>

    <label>Скорост на колата</label>
    <input type="number" min={0} placeholder="км/ч" />

    <label>Пътна обстановка</label>
    <select name="road-conditions">
      <option value={0.97}>сух асфалт</option>
      <option value={0.7}>мокър асфалт</option>
      <option value={0.2}>заснежен асфалт</option>
      <option value={0.1}>заледен асфалт</option>
    </select>

    <label>Наклон на пътя</label>
    <select name="road-gradient">
      <option value={10}>лек наклон нагоре</option>
      <option value={30}>стръмен наклон нагоре</option>
      <option value={-10}>лек наклон надолу</option>
      <option value={-30}>стръмен наклон надолу</option>
    </select>

    <label>Разстояние до мястото на евентуален сблъсък</label>
    <input type="number" min={1} placeholder="в метри" />
  </form>
);

export default Form;
