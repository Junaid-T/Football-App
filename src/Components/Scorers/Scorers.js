import React, { useContext } from "react";
import classes from "./Scorers.module.css";
import { StoreContext } from "../../Contexts/Store";
import { Link } from "react-router-dom";

const Scorers = () => {
  const store = useContext(StoreContext);

  const showPlayer = (e) => {
    store.setPopup(true);
    store.setActivePlayer(e.target.parentElement.id);
  };

  const top5 = store.topScorers.map((player, index) => {
    while (index < 5) {
      return (
        <div
          className={classes.PlayerContainer}
          key={player.player_id}
          id={player.player_id}
        >
          <h4 onClick={showPlayer}>
            {player.firstname + " " + player.lastname}
          </h4>
          <Link to="" className={classes.Link}>
            <h5>{player.team_name}</h5>
          </Link>
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
