import React, { useEffect, useContext, Fragment } from "react";
import classes from "./Table.module.css";
import { StoreContext } from "../../../Contexts/Store";

const TableSmall = () => {
  const [leagueTable] = useContext(StoreContext);
  let table = null;

  if (leagueTable) {
    table = leagueTable.map((team) => {
      return (
        <div key={team.team_id} className={classes.Team}>
          <p className={classes.Rank}>{team.rank}</p>
          <p className={classes.Name}>{team.teamName}</p>
          <p className={classes.Played}>{team.all.matchsPlayed}</p>
          <p className={classes.Difference}>{team.goalsDiff}</p>
          <p className={classes.Points}>{team.points}</p>
        </div>
      );
    });
  }

  return (
    <div className={classes.Container}>
      <div className={classes.Team}>
        <p className={classes.Rank}>Position</p>
        <p className={classes.Name}>Team</p>
        <p className={classes.Played}>Played</p>
        <p className={classes.Difference}>GD</p>
        <p className={classes.Points}>Points</p>
      </div>
      {table}
    </div>
  );
};

export default TableSmall;
