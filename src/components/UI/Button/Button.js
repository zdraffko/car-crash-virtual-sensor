import React from "react";

import styles from "./Button.module.css";

const Button = ({ buttonType, onClick, isSubmitting, children }) => (
  <button
    type={buttonType}
    className={styles.Button}
    onClick={onClick}
    disabled={isSubmitting}
  >{children}
  </button>
);

export default Button;
