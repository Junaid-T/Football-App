import React, { Fragment } from "react";
import classes from "./MatchStats.module.css";

const MatchStats = (props) => {
  const data = props.data;

  const findPercentage = (stat) => {
    const home = parseInt(stat.home);
    const away = parseInt(stat.away);
    const percentage = (home / (home + away)) * 100 + "%";

    return (
      <div className={classes.StatBar}>
        <div
          className={classes.StatBar2}
          style={{
            width: percentage,
          }}
        ></div>
      </div>
    );
  };

  if (data.statistics === null) {
    return <h2>We'll bring you all the live events as they happen</h2>;
  }

  return (
    <Fragment>
      <h4 style={{ marginTop: "2%" }}>{data.elapsed}'</h4>
      <div className={classes.Stat}>
        <h4>Possession</h4>
        {data.statistics["Ball Possession"].home}{" "}
        {data.statistics["Ball Possession"].away}
        {findPercentage(data.statistics["Ball Possession"])}
      </div>
      <div className={classes.Stat}>
        <h4>Shots</h4>
        {data.statistics["Total Shots"].home}{" "}
        {data.statistics["Total Shots"].away}
        {findPercentage(data.statistics["Total Shots"])}
      </div>
      <div className={classes.Stat}>
        <h4>Shots on Target</h4>
        {data.statistics["Shots on Goal"].home}{" "}
        {data.statistics["Shots on Goal"].away}
        {findPercentage(data.statistics["Shots on Goal"])}
      </div>
      <div className={classes.Stat}>
        <h4>Corners</h4>
        {data.statistics["Corner Kicks"].home}{" "}
        {data.statistics["Corner Kicks"].away}
        {findPercentage(data.statistics["Corner Kicks"])}
      </div>
      <div className={classes.Stat}>
        <h4>Fouls</h4>
        {data.statistics["Fouls"].home} {data.statistics["Fouls"].away}
        {findPercentage(data.statistics["Fouls"])}
      </div>
    </Fragment>
  );
};

export default MatchStats;
