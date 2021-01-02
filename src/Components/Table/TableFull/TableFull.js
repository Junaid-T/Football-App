import React, { useContext } from "react";
import classes from "./TableFull.module.css";
import { StoreContext } from "../../../Contexts/Store";
import { Link } from "react-router-dom";

const TableFull = () => {
  const store = useContext(StoreContext);
  let table = null;

  if (store.leagueTable) {
    table = store.leagueTable.map((team) => {
      return (
        <div key={team.team_id} className={classes.Team}>
          <p className={classes.Rank}>{team.rank}</p>
          <Link to={`/team/${team.team_id}`} className={classes.Name}>
            <h5>{team.teamName}</h5>
          </Link>
          <p className={classes.Played}>{team.all.matchsPlayed}</p>
          <p className={classes.Played}>{team.all.win}</p>
          <p className={classes.Played}>{team.all.draw}</p>
          <p className={classes.Played}>{team.all.lose}</p>
          <p className={classes.Difference}>{team.goalsDiff}</p>
          <p className={classes.Difference}>{team.all.goalsFor}</p>
          <p className={classes.Difference}>{team.all.goalsAgainst}</p>
          <p className={classes.Points}>{team.points}</p>
        </div>
      );
    });
  }

  return (
    <div className={classes.Container}>
      <div className={classes.Team}>
        <div className={classes.Rank}>Position</div>
        <h4 className={classes.Name}>Team</h4>
        <div className={classes.Played}>Played</div>
        <div className={classes.Played}>W</div>
        <div className={classes.Played}>D</div>
        <div className={classes.Played}>L</div>
        <div className={classes.Difference}>GD</div>
        <div className={classes.Difference}>GF</div>
        <div className={classes.Difference}>GA</div>
        <div className={classes.Points}>Points</div>
      </div>
      <ul>{table}</ul>
    </div>
  );
};

export default TableFull;
