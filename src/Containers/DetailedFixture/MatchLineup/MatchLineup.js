import React, { Fragment } from "react";
import classes from "./MatchLineup.module.css";
import shirt from "../../../Assets/shirt-outline.svg";

// FIX SHIRT COLOR

const MatchLineup = (props) => {
  const data = props.data;

  const lineup = (team) => {
    const homeTeam = data.homeTeam.team_name;
    const awayTeam = data.awayTeam.team_name;

    const getLineup = (team) => {
      return data.lineups[team].startXI.map((player) => {
        return (
          <li key={player.player_id} className={classes.Player}>
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
