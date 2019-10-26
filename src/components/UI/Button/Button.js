import React from "react";

import styles from "./Button.module.css";

const Button = ({ buttonType, isSubmitting, children }) => (
  <button
    type={buttonType}
    className={styles.Button}
    disabled={isSubmitting}
  >{children}
  </button>
);

export default Button;
