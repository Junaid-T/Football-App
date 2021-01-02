import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_key } from "../../SECRETS";
import { Switch, Route, Link } from "react-router-dom";
import getData from "../../helper";

import classes from "./Team.module.css";
import Results from "../Results/Results";
import Squad from "./Squad/Squad";
import teamHome from "./TeamHome/TeamHome";

const Team = (props) => {
  const [fixtures, setFixtures] = useState(null);
  const number = 10;
  const team_id = props.match.params.id;
  const teamLogo = `https://media.api-sports.io/football/teams/${team_id}.png`;

  useEffect(() => {
    getData(
      `https://api-football-v1.p.rapidapi.com/v2/fixtures/team/${team_id}/next/${number}`
    ).then((response) => setFixtures(response.data.api.fixtures));
  }, [team_id]);

  return (
    <div className={classes.Container}>
      <div className={classes.TeamPages}>
        <Link className={classes.Page} to={`/team/${team_id}`}>
          Home
        </Link>
        <Link className={classes.Page} to={`/team/${team_id}/results`}>
          Results
        </Link>
        <Link className={classes.Page} to={`/team/${team_id}/squad`}>
          Team
        </Link>
      </div>
      <Switch>
        <Route path="/team/:id/results" component={Results} />
        <Route path="/team/:id/squad" component={Squad} />
        <Route path="/team/:id" component={teamHome} />
      </Switch>
    </div>
  );
};

export default Team;
