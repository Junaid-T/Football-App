import React, { useEffect, useState } from "react";
import classes from "./Team.module.css";
import Table from "../../Components/Table/TableSmall/Table";
import Fixtures from "../../Components/Fixtures/FixturesHome/Fixtures";
import axios from "axios";
import { API_key } from "../../SECRETS";

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

  return (
    <div className={classes.Container}>
      <h2>%TEAM NAME%</h2>
      <img src={teamLogo} alt="Team Logo" />
      <div>%SQUAD LINK%</div>
      <Fixtures type="Team" data={fixtures} />
      <div className={classes.TableContainer}>
        <Table />
      </div>
    </div>
  );
};

export default Team;

//`https://api-football-v1.p.rapidapi.com/v2/players/squad/{team_id}/`                       +++++++++  squad
// "https://api-football-v1.p.rapidapi.com/v2/fixtures/team/{team_id}/last/{number}"          +++++++++  results
