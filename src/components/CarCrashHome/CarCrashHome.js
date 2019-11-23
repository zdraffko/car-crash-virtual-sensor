import React from "react";

import Button from "../UI/Button/Button";

import styles from "./CarCrashHome.module.css";

const CarCrashHome = ({ history, resetForm }) => (
  <>
    <h1>Начало</h1>
    <div className={styles.Home}>
      <p>Виртуален сензор за изчисляване вероятността за смърт
при катастрофа, ако има такава.
      </p>
      <p>Софтуерът работи с входни данни, въведени от потребителя,
 възоснова на които се извършват поредица от изчисления чрез които разбираме каква ще е
 вероятността за смърт при евентуална катастрофа.
      </p>
    </div>
    <Button
      buttonType="button"
      onClick={() => {
        resetForm();
        history.push("/car-crash-virtual-sensor");
      }}
    >Към виртуалния сензор
    </Button>
    <Button buttonType="button" onClick={() => history.push("/car-crash-documentation")}>Към документацията</Button>
  </>
);

export default CarCrashHome;
