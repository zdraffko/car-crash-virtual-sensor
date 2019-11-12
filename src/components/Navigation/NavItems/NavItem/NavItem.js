import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavItem.module.css";

const NavItem = ({ link, children }) => (
  <li className={styles.NavItem}>
    <NavLink to={link} activeClassName={styles.activeNavItem}>{children}</NavLink>
  </li>
);

export default NavItem;
