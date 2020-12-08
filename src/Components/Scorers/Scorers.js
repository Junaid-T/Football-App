import React, { useContext } from "react";
import classes from "./Scorers.module.css";
import { StoreContext } from "../../Contexts/Store";

const Scorers = () => {
  const store = useContext(StoreContext);

  const top5 = store.topScorers.map((player, index) => {
    while (index < 5) {
      return (
        <div className={classes.PlayerContainer} key={player.player_id}>
          <h4>{player.firstname + " " + player.lastname}</h4>
          <h5>{player.team_name}</h5>
          <div>{player.goals.total}</div>
        </div>
      );
    }
    return null;
  });

  return (
    <div className={classes.Container}>
      Top Scorers
      {top5}
    </div>
  );
};

export default Scorers;
