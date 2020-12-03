import React, { useContext } from "react";
import classes from "./FullStatistics.module.css";
import { StoreContext } from "../../../Contexts/Store";

const FullStatistics = () => {
  const [, , topScorers] = useContext(StoreContext);

  const fullTable = topScorers.map((player) => {
    return (
      <div className={classes.PlayerContainer} key={player.player_id}>
        <h4>{player.firstname + " " + player.lastname}</h4>
        <h4>{player.team_name}</h4>
        <div>{player.goals.total}</div>
        <div>{player.goals.assists ? player.goals.assists : 0}</div>
        <div>{player.games.appearences}</div>
        <div>
          {(player.goals.total / (player.games.minutes_played / 90)).toFixed(2)}
        </div>
        <div>{player.shots.total}</div>
        <div>
          {((player.goals.total / player.shots.total) * 100).toFixed(0)}%
        </div>
        <div>{((player.shots.on / player.shots.total) * 100).toFixed(0)}%</div>
      </div>
    );
  });

  return (
    <div class={classes.Container}>
      <div className={classes.HeaderContainer}>
        <h4>Name</h4>
        <h4>Team</h4>
        <div>Goals</div>
        <div>Assist</div>
        <div>Appearences</div>
        <div>Goals per 90</div>
        <div>Total Shots</div>
        <div>Goal Converstion</div>
        <div>Shot Accuracy</div>
      </div>
      {fullTable}
    </div>
  );
};

export default FullStatistics;
