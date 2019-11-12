import React from "react";

import NavItem from "./NavItem/NavItem";

import styles from "./NavItems.module.css";

const NavItems = () => (
  <ul className={styles.NavItems}>
    <NavItem link="/car-crash-home">Начало</NavItem>
    <NavItem link="/car-crash-virtual-sensor">Виртуален Сензор</NavItem>
    <NavItem link="car-crash-documentation">Документация</NavItem>
  </ul>
);

export default NavItems;
