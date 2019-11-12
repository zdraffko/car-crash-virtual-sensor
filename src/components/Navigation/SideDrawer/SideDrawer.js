import React from "react";

import NavItems from "../NavItems/NavItems";

import styles from "./SideDrawer.module.css";

const SideDrawer = () => (
  <div className={styles.SideDrawer}>
    <nav>
      <NavItems />
    </nav>
  </div>
);

export default SideDrawer;
