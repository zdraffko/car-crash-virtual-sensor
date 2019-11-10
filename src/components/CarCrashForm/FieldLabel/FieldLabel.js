import React from "react";

const FieldLabel = ({ validationErrors, labelContent, styles }) => (
  <label className={validationErrors ? `${styles.inputLabel} ${styles.errorLabel}` : styles.inputLabel}>
    <span className={validationErrors ? `${styles.labelContent} ${styles.errorContent}` : styles.labelContent}>
      {validationErrors || labelContent}
    </span>
  </label>
);

export default React.memo(FieldLabel);
