import React from "react";

import FieldLabel from "../FieldLabel/FieldLabel";

import styles from "./SelectSection.module.css";

const SelectSection = ({
  selectSectionName,
  selectSectionValue,
  handleOnChange,
  handleOnBlur,
  isRequired,
  validationErrors,
  selectSectionOptions,
  labelContent
}) => (
  <div className={styles.selectSection}>
    <select
      name={selectSectionName}
      value={selectSectionValue}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      required={isRequired}
    >
      <option value="" disabled>{}</option>
      {
        Object.keys(selectSectionOptions)
          .map((key) => <option value={selectSectionOptions[key]} key={key}>{key}</option>)
      }
    </select>
    <FieldLabel
      validationErrors={validationErrors}
      labelContent={labelContent}
    />
  </div>
);

export default SelectSection;
