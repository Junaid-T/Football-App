import React, { Fragment } from "react";
import classes from "./MatchLineup.module.css";

const MatchLineup = (props) => {
  const data = props.data;

  const lineup = (team) => {
    const homeTeam = data.homeTeam.team_name;
    const awayTeam = data.awayTeam.team_name;

    const getLineup = (team) => {
      return data.lineups[team].startXI.map((player) => {
        return <li>{player.player}</li>;
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
      <ul className={classes.HomeTeamContainer}>{lineup("home")}</ul>
      <ul className={classes.AwayTeamContainer}>{lineup("away")}</ul>
    </Fragment>
  );
};

export default MatchLineup;
