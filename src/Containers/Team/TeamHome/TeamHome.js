import React, { useEffect, useState, Fragment } from "react";
import getData from "../../../helper";

import classes from "./TeamHome.module.css";
import Table from "../../../Components/Table/TableSmall/Table";
import Fixtures from "../../../Components/Fixtures/FixturesHome/Fixtures";

const TeamHome = (props) => {
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
    <Fragment>
      <img src={teamLogo} alt="Team Logo" className={classes.Image} />
      <div className={classes.FixtureContainer}>
        <Fixtures type="Team" data={fixtures} />
      </div>
      <div className={classes.TableContainer}>
        <Table />
      </div>
    </Fragment>
  );
};

export default TeamHome;
