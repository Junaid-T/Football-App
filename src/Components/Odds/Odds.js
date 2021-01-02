import React, { useContext } from "react";
import classes from "./Odds.module.css";
import { StoreContext } from "../../Contexts/Store";
import { Link } from "react-router-dom";

const Odds = () => {
  const store = useContext(StoreContext);
  let bookmakers;
  if (store.bookmakers) {
    bookmakers = store.bookmakers.map((bookmaker) => {
      return (
        <Link to={`/bookmaker/${bookmaker.id}`} className={classes.Bookmaker}>
          {bookmaker.name}
        </Link>
      );
    });
  }

  return (
    <div className={classes.Container}>
      <div className={classes.Header}>
        Check out what odds we have available with
      </div>
      <div className={classes.Bookmakers}>{bookmakers}</div>
    </div>
  );
};

export default Odds;
