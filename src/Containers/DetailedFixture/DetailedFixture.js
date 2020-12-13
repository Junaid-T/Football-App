import React, { useEffect, useState, Fragment } from "react";
import classes from "./DetailedFixture.module.css";
import axios from "axios";

import MatchStats from "./MatchStats/MatchStats";
import MatchLineup from "./MatchLineup/MatchLineup";

const DetailedFixture = (props) => {
  const [data, setData] = useState(null);
  let display = null;
  useEffect(() => {
    const fixtureRequest = {
      method: "GET",
      url:
        // Need to make dynamic afterwards using props.fixture_id
        `https://api-football-v1.p.rapidapi.com/v2/fixtures/id/${592258}`,
      headers: {
        "x-rapidapi-key": "a0272a4936mshf37852dcde693bcp1dbf3bjsn0feda5ecaac5",
      },
    };

    const getFixture = async function () {
      try {
        const response = await axios.request(fixtureRequest);
        console.log(response);
        return response;
      } catch (error) {
        console.log(error);
      }
    };
    getFixture().then((response) => setData(response.data.api.fixtures[0]));
  }, []);

  const handleClick = (e) => {
    if (e.target.classList.contains("active")) return;
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
        <form className={classes.Buttons}>
          <label for="StatsButton" onClick={handleClick}>
            STATS
            <input
              name="mode"
              type="radio"
              id="StatsButton"
              className={classes.Checkbox}
              checked
            ></input>
          </label>
          <label for="LineupButton" onClick={handleClick}>
            LINEUP
            <input
              name="mode"
              type="radio"
              id="LineupButton"
              className={classes.Checkbox}
            ></input>
          </label>
        </form>
        <div className={classes.MatchContent}>
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
