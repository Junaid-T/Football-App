import React, { useContext } from "react";
import classes from "./Scorers.module.css";
import { StoreContext } from "../../Contexts/Store";
import { Link } from "react-router-dom";

const Scorers = () => {
  const store = useContext(StoreContext);

  const showPlayer = (e) => {
    store.setPopup(true);
    store.setActivePlayer(e.target.id);
  };

  const top5 = store.topScorers.map((player, index) => {
    while (index < 5) {
      return (
        <div className={classes.PlayerContainer} key={player.player_id}>
          <div className={classes.NameAndTeam}>
            <h4
              className={classes.Name}
              onClick={showPlayer}
              id={player.player_id}
            >
              {player.firstname + " " + player.lastname}
            </h4>
            <Link to={`/team/${player.team_id}`} className={classes.Link}>
              <h5>{player.team_name}</h5>
            </Link>
          </div>
          <div className={classes.Goals}>{player.goals.total}</div>
        </div>
      );
    }
    return null;
  });

  return (
    <div className={classes.Container}>
      <h4>Top Scorers</h4>
      {top5}
    </div>
  );
};

export default Scorers;
