import React from "react";

import styles from "./BurgerMenu.module.css";

const BurgerMenu = ({ toggleSideDrawer }) => (
  <div
    role="presentation"
    className={styles.BurgerMenu}
    onClick={toggleSideDrawer}
  >
    <div />
    <div />
    <div />
  </div>
);

export default BurgerMenu;
