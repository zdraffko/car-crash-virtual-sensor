import React, { useEffect } from "react";

import calculateStoppingDistance from "../../util/CalculateResults/calculateStoppingDistance";
import calculateCarCrashSpeed from "../../util/CalculateResults/calculateCarCrashSpeed";
import Button from "../UI/Button/Button";

import styles from "./CarCrashResults.module.css";

let hasCrashed = false;
let stoppingDistance = 0;
let carCrashSpeed = 0;

const CarCrashResults = ({
  carSpeed,
  reactionTime,
  roadGradient,
  roadConditions,
  distanceToObstacle,
  resetForm,
  history
}) => {
  useEffect(() => {
    stoppingDistance = Math.abs(calculateStoppingDistance(
      Number(carSpeed),
      Number(reactionTime),
      Number(roadGradient),
      Number(roadConditions)
    ));
    console.log(`stopping distance ${stoppingDistance}`);
    if (stoppingDistance > distanceToObstacle) {
      hasCrashed = true;
      carCrashSpeed = calculateCarCrashSpeed(Number(carSpeed), Number(reactionTime), Number(distanceToObstacle));
      console.log(`car crash speed ${carCrashSpeed}`);
    }
  }, [carSpeed, distanceToObstacle, reactionTime, roadConditions, roadGradient]);

  return (
    <>
      <h1>Резултати</h1>
      <div className={styles.Results}>
        {
          hasCrashed
            ? (
              <>
                <h3>Ще има катастрофа</h3>
                <p>Колата няма да успее да спре успешно преди мястото на сблъсък.</p>
                <p>Скоростта на при сблъсъка ще е {carCrashSpeed.toFixed(2)} метра за секунда.</p>
              </>
            )
            : (
              <>
                <h3>Няма да има катастрофа !</h3>
                <p>Колата ще успее да спре успешно на {(distanceToObstacle - stoppingDistance)
                  .toFixed(2)} метра от мястото на сблъсък.
                </p>
              </>
            )
        }
      </div>
      <Button
        buttonType="button"
        onClick={() => {
          resetForm();
          history.push("/car-crash-virtual-sensor");
        }}
      >Ново изчисление
      </Button>
    </>
  );
};

export default CarCrashResults;
