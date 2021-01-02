import React, { useEffect, useState, useContext } from "react";
import classes from "./Squad.module.css";
import { API_key } from "../../../SECRETS";
import axios from "axios";
import { StoreContext } from "../../../Contexts/Store";
import getData from "../../../helper";

const Squad = (props) => {
  const [squad, setSquad] = useState([]);
  const team_id = props.match.params.id;
  const season = "2020";
  const store = useContext(StoreContext);

  const showPlayer = (e) => {
    store.setPopup(true);
    store.setActivePlayer(e.target.id);
  };

  useEffect(() => {
    getData(
      `https://api-football-v1.p.rapidapi.com/v2/players/squad/${team_id}/${season}`
    ).then((response) => setSquad(response.data.api.players));
  }, [team_id]);

  const filterPositions = (position) => {
    return squad.map((player) => {
      return player.position === position ? (
        <li key={player.player_id} className={classes.Player}>
          <p onClick={showPlayer} id={player.player_id}>
            {player.player_name}
          </p>
        </li>
      ) : null;
    });
  };

  const goalkeepers = filterPositions("Goalkeeper");
  const defenders = filterPositions("Defender");
  const midfielders = filterPositions("Midfielder");
  const attackers = filterPositions("Attacker");

  return (
    <div className={classes.Container}>
      <div className={classes.GoalkeeperContainer}>
        <h4 className={classes.Header}>Goalkeepers</h4>
        <ul className={classes.PlayersContainer}>{goalkeepers}</ul>
      </div>
      <div className={classes.DefenderContainer}>
        <h4 className={classes.Header}>Defenders</h4>
        <ul className={classes.PlayersContainer}>{defenders}</ul>
      </div>
      <div className={classes.MidfieldersContainer}>
        <h4 className={classes.Header}>Midfielders</h4>
        <ul className={classes.PlayersContainer}>{midfielders}</ul>
      </div>
      <div className={classes.AttackersContainer}>
        <h4 className={classes.Header}>Attackers</h4>
        <ul className={classes.PlayersContainer}>{attackers}</ul>
      </div>
    </div>
  );
};

export default Squad;
