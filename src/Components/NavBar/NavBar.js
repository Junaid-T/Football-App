import React from "react";
import classes from "./NavBar.module.css";
import Logo from "../../Assets/football-outline.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={classes.Container}>
      <img src={Logo} alt="Temp_Logo" className={classes.Logo} />
      <ul className={classes.Nav}>
        <Link to="/" className={classes.NavItem}>
          <li>Home</li>
        </Link>
        <Link to="/results" className={classes.NavItem}>
          <li>Results</li>
        </Link>
        <Link to="/table" className={classes.NavItem}>
          <li>Full Table</li>
        </Link>
        <Link to="/topscorers" className={classes.NavItem}>
          <li>Top Scorers</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
