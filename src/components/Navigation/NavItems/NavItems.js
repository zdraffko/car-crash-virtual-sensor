import React from "react";

import NavItem from "./NavItem/NavItem";

import styles from "./NavItems.module.css";

const NavItems = ({ onClick }) => (
  <ul className={styles.NavItems}>
    <NavItem link="/home" onClick={onClick}>Начало</NavItem>
    <NavItem link="/virtual-sensor" onClick={onClick}>Виртуален Сензор</NavItem>
    <NavItem link="/documentation" onClick={onClick}>Документация</NavItem>
  </ul>
);

export default React.memo(NavItems);
