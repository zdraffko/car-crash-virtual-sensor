import React from "react";

import styles from "./Button.module.css";

const Button = ({ isSubmitting, children }) => (
  <button
    type="submit"
    className={styles.Button}
    disabled={isSubmitting}
  >{children}
  </button>
);

export default Button;
