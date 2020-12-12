import React, { Fragment } from "react";
import classes from "./MatchStats.module.css";

const MatchStats = (props) => {
  const data = props.data;

  return (
    <Fragment>
      <h4>{data.elapsed}'</h4>
      <div>
        <h4>Possession</h4>
        {data.statistics["Ball Possession"].home}{" "}
        {data.statistics["Ball Possession"].away}
      </div>
      <div>
        <h4>Shots</h4>
        {data.statistics["Total Shots"].home}{" "}
        {data.statistics["Total Shots"].away}
      </div>
      <div>
        <h4>Shots on Target</h4>
        {data.statistics["Shots on Goal"].home}{" "}
        {data.statistics["Shots on Goal"].away}
      </div>
      <div>
        <h4>Corners</h4>
        {data.statistics["Corner Kicks"].home}{" "}
        {data.statistics["Corner Kicks"].away}
      </div>
      <div>
        <h4>Fouls</h4>
        {data.statistics["Fouls"].home} {data.statistics["Fouls"].away}
      </div>
    </Fragment>
  );
};

export default MatchStats;
