import React from "react";

import NavItems from "../NavItems/NavItems";

import styles from "./NavBar.module.css";

const NavBar = () => (
  <nav className={styles.NavBar}>
    <NavItems />
  </nav>
);

export default React.memo(NavBar);
