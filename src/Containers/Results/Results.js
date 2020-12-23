import React, { useEffect, useState } from "react";
import classes from "./Results.module.css";
import { API_key } from "../../SECRETS";
import axios from "axios";
import { Link } from "react-router-dom";

const Results = (props) => {
  const [results, setResults] = useState(null);
  console.log(props.match.params.id);
  const id = props.match.params.id ? props.match.params.id : null;
  const url = props.match.params.id
    ? `https://api-football-v1.p.rapidapi.com/v2/fixtures/team/${id}/last/10`
    : `https://api-football-v1.p.rapidapi.com/v2/fixtures/league/2790/last/10`;
  useEffect(() => {
    const resultsOptions = {
      method: "GET",
      //url: `https://api-football-v1.p.rapidapi.com/v2/fixtures/league/2790/last/10`,
      url: url,
      headers: {
        "x-rapidapi-key": `${API_key}`,
      },
    };

    const getFixtures = async function () {
      try {
        const response = await axios.request(resultsOptions);
        return response;
      } catch (error) {
        console.log(error);
      }
    };

    getFixtures().then((response) => setResults(response.data.api.fixtures));
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////
  }, []);

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

  return <ul className={classes.Container}>{displayResults}</ul>;
};

export default Results;
