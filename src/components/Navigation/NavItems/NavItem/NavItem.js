import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavItem.module.css";

const NavItem = ({ link, children, onClick }) => (
  <li className={styles.NavItem}>
    <NavLink to={link} activeClassName={styles.activeNavItem} onClick={onClick}>{children}</NavLink>
  </li>
);

export default NavItem;
