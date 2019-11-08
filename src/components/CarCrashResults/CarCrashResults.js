import React, { useState, useEffect, useMemo } from "react";

// import calculateStoppingDistance from "../../util/CalculateResults/calculateStoppingDistance";
// import calculateCarCrashSpeed from "../../util/CalculateResults/calculateCarCrashSpeed";
// import calculateDeceleration from "../../util/CalculateResults/calculateDeceleration";
// import calculateDeathProbability from "../../util/CalculateResults/calculateDeathProbability";
import calculateResults from "../../util/CalculateResults/calculateResults";
import Button from "../UI/Button/Button";

import styles from "./CarCrashResults.module.css";

// let carCrashSpeed;
// let deathProbability;
// let stoppingDistance;

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
  // const [hasCrashed, setHasCrashed] = useState(false);

  const { stoppingDistance, hasCrashed, carCrashSpeed, deceleration, deathProbability } = useMemo(() => calculateResults(
    carSpeed,
    reactionTime,
    roadGradient,
    roadConditions,
    distanceToObstacle,
    driverWeight,
    hasSeatbelt
  ), [carSpeed, distanceToObstacle, driverWeight, hasSeatbelt, reactionTime, roadConditions, roadGradient]);

  console.log(`stopping distance ${stoppingDistance}`);
  console.log(`car crash speed ${carCrashSpeed}`);
  console.log(`deceleration ${deceleration}`);
  console.log(`death probability ${deathProbability}`);
  // const stoppingDistance = useMemo(() => Math.abs(calculateStoppingDistance(
  //   Number(carSpeed),
  //   Number(reactionTime),
  //   Number(roadGradient),
  //   Number(roadConditions)
  // )), [carSpeed, reactionTime, roadGradient, roadConditions]) || 0;

  // useEffect(() => {
  //   console.log(`stopping distance ${stoppingDistance}`);
  //   if (stoppingDistance > distanceToObstacle) {
  //     carCrashSpeed = calculateCarCrashSpeed(
  //       Number(carSpeed),
  //       Number(reactionTime),
  //       Number(distanceToObstacle)
  //     );
  //     console.log(`car crash speed ${carCrashSpeed}`);
  //     const deceleration = calculateDeceleration(driverWeight, carCrashSpeed, seatbelt);
  //     console.log(`deceleration ${deceleration}`);
  //     deathProbability = calculateDeathProbability(deceleration);
  //     console.log(`death probability ${deathProbability}`);
  //     setHasCrashed(true);
  //   }
  // }, [carSpeed, distanceToObstacle, driverWeight, reactionTime, seatbelt, stoppingDistance]);

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
                <p>Скоростта на колата при сблъсъка ще е {carCrashSpeed.toFixed(2)} метра в секунда.</p>
                <p>Вероятността за смърт е {deathProbability} %.</p>
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
