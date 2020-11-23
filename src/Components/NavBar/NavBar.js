import React from "react";
import classes from "./NavBar.module.css";
import Logo from "../../Assets/football-outline.svg";

const navBar = () => {
  return (
    <nav className={classes.Container}>
      <img src={Logo} alt="Temp_Logo" className={classes.Logo} />
      <ul className={classes.Nav}>
        <li>Home</li>
        <li>Results</li>
        <li>Full Table</li>
        <li>News</li>
      </ul>
    </nav>
  );
};

export default navBar;
