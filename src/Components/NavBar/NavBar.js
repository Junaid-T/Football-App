import React from "react";
import classes from "./NavBar.module.css";
import Logo from "../../Assets/football-outline.svg";
import { Link } from "react-router-dom";

const navBar = () => {
  return (
    <nav className={classes.Container}>
      <img src={Logo} alt="Temp_Logo" className={classes.Logo} />
      <ul className={classes.Nav}>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/">
          <li>Results</li>
        </Link>
        <Link to="/table">
          <li>Full Table</li>
        </Link>
        <Link to="/topscorers">
          <li>Top Scorers</li>
        </Link>
      </ul>
    </nav>
  );
};

export default navBar;
