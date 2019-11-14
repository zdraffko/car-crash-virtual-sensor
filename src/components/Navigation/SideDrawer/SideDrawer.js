import React from "react";

import NavItems from "../NavItems/NavItems";

import styles from "./SideDrawer.module.css";

const SideDrawer = ({ isOpen, closeSideDrawer }) => (
  <div className={`${styles.SideDrawer} ${isOpen ? styles.Opened : styles.Closed}`}>
    <nav>
      <NavItems onClick={closeSideDrawer} />
    </nav>
  </div>
);

export default SideDrawer;
