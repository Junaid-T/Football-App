import React, { useEffect, useState, Fragment } from "react";
import classes from "./DetailedFixture.module.css";
import MatchStats from "./MatchStats/MatchStats";
import MatchLineup from "./MatchLineup/MatchLineup";
import getData from "../../helper";

const DetailedFixture = (props) => {
  const [data, setData] = useState(null);
  const [activeSlide, setActiveSlide] = useState("Stats");
  const id = props.match.params.fixture;

  let display = null;
  useEffect(() => {
    getData(
      `https://api-football-v1.p.rapidapi.com/v2/fixtures/id/${id}`
    ).then((response) => setData(response.data.api.fixtures[0]));
  }, [id]);

  const handleClick = (e) => {
    if (e.target.id === activeSlide) return;
    setActiveSlide(activeSlide !== "Stats" ? "Stats" : "Lineup");
  };

  const setSlide = () => {
    return activeSlide === "Stats"
      ? classes.MatchContent
      : classes.MatchContentLineup;
  };

  if (data) {
    display = (
      <Fragment>
        <div className={classes.MatchHeader}>
          <img src={data.homeTeam.logo} alt="Home team logo" />
          <h2>
            {data.goalsHomeTeam} - {data.goalsAwayTeam}
          </h2>
          <img src={data.awayTeam.logo} alt="Away team logo" />
        </div>
        <div className={classes.Buttons}>
          <div onClick={handleClick} id="Stats" className={classes.StatsButton}>
            STATS
          </div>
          <div
            onClick={handleClick}
            id="Lineup"
            className={classes.StatsButton}
          >
            LINEUP
          </div>
        </div>
        <div className={setSlide()}>
          <div className={classes.StatsContainer}>
            <MatchStats data={data} />
          </div>
          <div className={classes.LineupContainer}>
            <MatchLineup data={data} />
          </div>
        </div>
      </Fragment>
    );
  }

  return <div className={classes.Container}>{display}</div>;
};

export default DetailedFixture;
