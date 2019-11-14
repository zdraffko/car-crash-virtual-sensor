import React from "react";

import styles from "./BurgerMenu.module.css";

const BurgerMenu = ({ toggleSideDrawer, isOpen }) => (
  <div
    role="presentation"
    className={styles.BurgerMenu}
    onClick={toggleSideDrawer}
  >
    <div className={isOpen ? styles.toggle : ""} id={styles.lineOne} />
    <div className={isOpen ? styles.toggle : ""} id={styles.lineTwo} />
    <div className={isOpen ? styles.toggle : ""} id={styles.lineThree} />
  </div>
);

export default BurgerMenu;
