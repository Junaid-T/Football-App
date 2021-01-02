import React, { useEffect, useState, Fragment, useContext } from "react";
import classes from "./Player.module.css";
import Backdrop from "../../Components/UX/Backdrop/Backdrop";
import { StoreContext } from "../../Contexts/Store";
import getData from "../../helper";

const Player = (props) => {
  const store = useContext(StoreContext);
  const id = store.activePlayer;
  const [player, setPlayer] = useState(null);
  // Fetch the player data
  useEffect(() => {
    getData(
      `https://api-football-v1.p.rapidapi.com/v2/players/player/${id}`
    ).then((response) => setPlayer(response.data.api.players[0]));
  }, [id]);

  let playerInfo = null;
  if (player) {
    playerInfo = (
      <div>
        <h3 className={classes.Name}>
          {player.firstname + " " + player.lastname}
        </h3>
        <h4 className={classes.Team}>{player.team_name}</h4>
        <p>{player.nationality}</p>
        <p>{player.height}</p>
        <p>{player.weight}</p>
        <p>Played: {player.games.appearences}</p>
        <p>
          Goals: {player.goals.total}
          {player.penalty.success ? "(" + player.penalty.success + ")" : null}
        </p>
        <p>Assist: {player.goals.assists}</p>
        <p>
          Shots: {player.shots.total}
          {player.shots.total
            ? "(" +
              ((player.shots.on / player.shots.total) * 100).toFixed(0) +
              "%)"
            : null}
        </p>
        <p>Passes: {player.passes.total}</p>
        <p>Tackles: {player.tackles.total}</p>
      </div>
    );
  }

  const closePopup = () => {
    store.setPopup(false);
    store.setActivePlayer(false);
  };

  return (
    <Fragment>
      <Backdrop closePopup={closePopup} />
      <div className={classes.Container}>{playerInfo}</div>
    </Fragment>
  );
};

export default Player;
