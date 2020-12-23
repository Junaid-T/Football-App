import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { API_key } from "../../SECRETS";
import { Switch, Route, Link } from "react-router-dom";

import classes from "./Team.module.css";
import Table from "../../Components/Table/TableSmall/Table";
import Fixtures from "../../Components/Fixtures/FixturesHome/Fixtures";
import Results from "../Results/Results";
import Squad from "./Squad/Squad";
import teamHome from "./TeamHome/TeamHome";

const Team = (props) => {
  const [fixtures, setFixtures] = useState(null);
  const number = 10;
  const team_id = props.match.params.id;
  const teamLogo = `https://media.api-sports.io/football/teams/${team_id}.png`;

  useEffect(() => {
    const teamFixtureOptions = {
      method: "GET",
      url: `https://api-football-v1.p.rapidapi.com/v2/fixtures/team/${team_id}/next/${number}`,
      headers: {
        "x-rapidapi-key": `${API_key}`,
      },
    };

    const getFixtures = async function () {
      try {
        const response = await axios.request(teamFixtureOptions);
        return response;
      } catch (error) {
        console.log(error);
      }
    };

    getFixtures().then((response) => setFixtures(response.data.api.fixtures));
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////
  }, [team_id]);

  // const teamHome = (
  //   <Fragment>
  //     <img src={teamLogo} alt="Team Logo" className={classes.Image} />
  //     <Fixtures type="Team" data={fixtures} />
  //     <div className={classes.TableContainer}>
  //       <Table />
  //     </div>
  //   </Fragment>
  // );

  // ROUTING WORKS AND HAVE EXPORTED ABOVE INTO SEPARATE FILE.
  //CLEAN UP AND THEN WORK ON PAGES

  return (
    <div className={classes.Container}>
      <div className={classes.TeamView}>
        <Link to={`/team/${team_id}`}>Home</Link>
        <Link to={`/team/${team_id}/results`}>Results</Link>
        <Link to={`/team/${team_id}/squad`}>Team</Link>
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
