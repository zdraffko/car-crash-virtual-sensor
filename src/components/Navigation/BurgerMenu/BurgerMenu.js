import React from "react";

import styles from "./BurgerMenu.module.css";

const BurgerMenu = ({ openSideDrawer }) => (
  <div
    role="presentation"
    className={styles.BurgerMenu}
    onClick={openSideDrawer}
  >
    <div />
    <div />
    <div />
  </div>
);

export default BurgerMenu;
