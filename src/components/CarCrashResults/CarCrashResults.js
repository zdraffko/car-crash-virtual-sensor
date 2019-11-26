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
  const impactForce = useRef(0);
  const hasCrashed = useRef(false);

  useEffect(() => {
    stoppingDistance.current = Math.abs(calculateStoppingDistance(
      Number(carSpeed),
      Number(reactionTime),
      Number(roadGradient),
      Number(roadConditions)
    ));

    if (stoppingDistance.current > distanceToObstacle) {
      hasCrashed.current = true;
      carCrashSpeed.current = calculateCarCrashSpeed(
        Number(carSpeed),
        Number(reactionTime),
        Number(distanceToObstacle),
        Number(roadConditions),
        Number(roadGradient)
      );

      const [deceleration, impactF] = calculateDeceleration(Number(driverWeight), carCrashSpeed.current, Number(hasSeatbelt));
      impactForce.current = impactF;

      deathProbability.current = calculateDeathProbability(deceleration);
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
                <p>На колата са необходими {stoppingDistance.current.toFixed(2)} метра за да избегне сблъсъка.
                </p>
                <p>Скоростта на колата при сблъсъка ще е {carCrashSpeed.current.toFixed(2)} метра в секунда ({
                (carCrashSpeed.current * 3.6).toFixed(2)
} километра в час).
                </p>
                <p>Силата при удара ще е {impactForce.current.toFixed(2)} Нютона.</p>
                <p>Вероятността за смърт е {deathProbability.current} %.</p>
              </>
            )
            : (
              <>
                <h3>Няма да има катастрофа !</h3>
                <p>Колата ще успее да спре успешно на {
                  stoppingDistance.current
                    ? (Number(distanceToObstacle) - stoppingDistance.current).toFixed(2) : 0
} метра от мястото на сблъсък. Вероятността за смърт е 0 %.
                </p>
              </>
            )
        }
      </div>
      <Button
        buttonType="button"
        onClick={() => {
          resetForm();
          history.push("/virtual-sensor");
        }}
      >Ново изчисление
      </Button>
      <Button
        buttonType="button"
        onClick={() => {
          history.push("/virtual-sensor");
        }}
      >Промени изчислението
      </Button>
    </>
  );
};

export default CarCrashResults;
