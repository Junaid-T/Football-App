import React, { Fragment, useContext } from "react";
import classes from "./MatchLineup.module.css";
import shirt from "../../../Assets/shirt-outline.svg";
import { StoreContext } from "../../../Contexts/Store";

// FIX SHIRT COLOR

const MatchLineup = (props) => {
  const store = useContext(StoreContext);
  const data = props.data;

  if (data.lineups === null) {
    return (
      <h2 className={classes.Unreleased}>
        The teams have not been released yet
      </h2>
    );
  }

  const showPlayer = (e) => {
    store.setPopup(true);
    store.setActivePlayer(e.target.id);
  };

  const lineup = (team) => {
    const homeTeam = data.homeTeam.team_name;
    const awayTeam = data.awayTeam.team_name;

    const getLineup = (team) => {
      return data.lineups[team].startXI.map((player) => {
        return (
          <li
            key={player.player_id}
            id={player.player_id}
            className={classes.Player}
            onClick={showPlayer}
          >
            <img className={classes.Shirt} src={shirt} alt="Shirt" />
            {player.player}
          </li>
        );
      });
    };

    if (team === "home") {
      return getLineup(homeTeam);
    } else if (team === "away") {
      return getLineup(awayTeam);
    }
  };

  return (
    <Fragment>
      <ul className={classes.TeamContainer}>{lineup("home")}</ul>
      <ul className={classes.TeamContainer}>{lineup("away")}</ul>
    </Fragment>
  );
};

export default MatchLineup;
