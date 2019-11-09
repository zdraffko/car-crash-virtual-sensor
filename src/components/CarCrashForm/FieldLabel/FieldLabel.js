import React from "react";

import styles from "../SelectSection/SelectSection.module.css";

const FieldLabel = ({ validationErrors, labelContent }) => (
  <label className={validationErrors ? `${styles.inputLabel} ${styles.errorLabel}` : styles.inputLabel}>
    <span className={validationErrors ? `${styles.labelContent} ${styles.errorContent}` : styles.labelContent}>
      {validationErrors || labelContent}
    </span>
  </label>
);

export default FieldLabel;
