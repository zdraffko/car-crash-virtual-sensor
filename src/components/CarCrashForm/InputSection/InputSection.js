import React from "react";

import FieldLabel from "../FieldLabel/FieldLabel";

import styles from "./InputSection.module.css";

const InputSection = ({
  inputSectionName,
  inputSectionType,
  inputSectionValue,
  handleOnChange,
  handleOnBlur,
  inputSectionMinValue,
  inputSectionStep,
  isRequired,
  validationErrors,
  labelContent
}) => (
  <div className={styles.inputSection}>
    <input
      name={inputSectionName}
      type={inputSectionType}
      value={inputSectionValue}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      min={inputSectionMinValue}
      required={isRequired}
      step={inputSectionStep}
    />
    <FieldLabel
      validationErrors={validationErrors}
      labelContent={labelContent}
      styles={styles}
    />
  </div>
);

export default React.memo(InputSection);
