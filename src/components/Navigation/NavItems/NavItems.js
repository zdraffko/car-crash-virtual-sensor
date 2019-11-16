import React from "react";

import NavItem from "./NavItem/NavItem";

import styles from "./NavItems.module.css";

const NavItems = ({ onClick }) => (
  <ul className={styles.NavItems}>
    <NavItem link="/car-crash-home" onClick={onClick}>Начало</NavItem>
    <NavItem link="/car-crash-virtual-sensor" onClick={onClick}>Виртуален Сензор</NavItem>
    <NavItem link="car-crash-documentation" onClick={onClick}>Документация</NavItem>
  </ul>
);

export default React.memo(NavItems);
