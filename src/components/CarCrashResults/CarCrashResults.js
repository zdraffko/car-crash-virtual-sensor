import React, { useEffect, useRef } from "react";

import calculateStoppingDistance from "../../util/CalculateResults/calculateStoppingDistance";
import calculateCarCrashSpeed from "../../util/CalculateResults/calculateCarCrashSpeed";
import calculateDeceleration from "../../util/CalculateResults/calculateDeceleration";
import calculateDeathProbability from "../../util/CalculateResults/calculateDeathProbability";
import Button from "../UI/Button/Button";

import styles from "./CarCrashResults.module.css";

const CarCrashResults = ({
  carSpeed,
  reactionTime,
  roadGradient,
  roadConditions,
  distanceToObstacle,
  driverWeight,
  hasSeatbelt,
  resetForm,
  history
}) => {
  const stoppingDistance = useRef(null);
  const carCrashSpeed = useRef(0);
  const deathProbability = useRef(0);
  const hasCrashed = useRef(false);

  useEffect(() => {
    stoppingDistance.current = Math.abs(calculateStoppingDistance(
      Number(carSpeed),
      Number(reactionTime),
      Number(roadGradient),
      Number(roadConditions)
    ));
    console.log(`stopping distance ${stoppingDistance.current}`);
    if (stoppingDistance.current > distanceToObstacle) {
      hasCrashed.current = true;
      carCrashSpeed.current = calculateCarCrashSpeed(
        Number(carSpeed),
        Number(reactionTime),
        Number(distanceToObstacle),
        Number(roadConditions)
      );
      console.log(`car crash speed ${carCrashSpeed.current}`);
      const deceleration = calculateDeceleration(Number(driverWeight), carCrashSpeed.current, Number(hasSeatbelt));
      console.log(`deceleration ${deceleration}`);
      deathProbability.current = calculateDeathProbability(deceleration);
      console.log(`death probability ${deathProbability.current}`);
    }
  }, [carSpeed, distanceToObstacle, driverWeight, hasSeatbelt, reactionTime, roadConditions, roadGradient]);

  return (
    <>
      <h1>Резултати</h1>
      <div className={styles.Results}>
        {
          hasCrashed.current
            ? (
              <>
                <h3>Ще има катастрофа</h3>
                <p>Колата няма да успее да спре успешно преди мястото на сблъсък.</p>
                <p>Скоростта на колата при сблъсъка ще е {carCrashSpeed.current.toFixed(2)} метра в секунда ({
                (carCrashSpeed.current * 3.6).toFixed(2)
} километра в час).
                </p>
                <p>Вероятността за смърт е {deathProbability.current} %.</p>
              </>
            )
            : (
              <>
                <h3>Няма да има катастрофа !</h3>
                <p>Колата ще успее да спре успешно на {
                  stoppingDistance.current
                    ? (Number(distanceToObstacle) - stoppingDistance.current).toFixed(2) : 0
} метра от мястото на сблъсък.
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
      <Button
        buttonType="button"
        onClick={() => {
          history.push("/car-crash-virtual-sensor");
        }}
      >Промени изчислението
      </Button>
    </>
  );
};

export default CarCrashResults;
