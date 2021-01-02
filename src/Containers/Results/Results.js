import React, { useEffect, useState } from "react";
import classes from "./Results.module.css";
import { Link } from "react-router-dom";
import getData from "../../helper";

const Results = (props) => {
  const [results, setResults] = useState(null);
  const id = props.match.params.id ? props.match.params.id : null;
  const url = props.match.params.id
    ? `https://api-football-v1.p.rapidapi.com/v2/fixtures/team/${id}/last/10`
    : `https://api-football-v1.p.rapidapi.com/v2/fixtures/league/2790/last/10`;

  useEffect(() => {
    getData(url).then((response) => setResults(response.data.api.fixtures));
  }, [url]);

  let displayResults = null;
  if (results) {
    displayResults = results.map((match) => {
      return (
        <li className={classes.Match} key={match.fixture_id}>
          <img src={match.homeTeam.logo} alt="Home team logo" />
          <Link to={`/fixture/${match.fixture_id}`} className={classes.Link}>
            <h4 className={classes.TeamName}>{match.homeTeam.team_name}</h4>
            <h4 className={classes.Scores}>
              {match.goalsHomeTeam} - {match.goalsAwayTeam}
            </h4>
            <h4 className={classes.TeamName}>{match.awayTeam.team_name}</h4>
          </Link>
          <img src={match.awayTeam.logo} alt="Away team logo" />
        </li>
      );
    });
  }

  return (
    <ul className={classes.Container}>
      <li className={classes.Header}>
        <strong>Latest Results</strong>
      </li>
      {displayResults}
    </ul>
  );
};

export default Results;
