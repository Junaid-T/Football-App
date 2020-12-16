import React, { useEffect, useState } from "react";
import classes from "./Squad.module.css";
import { API_key } from "../../../SECRETS";
import axios from "axios";

const Squad = (props) => {
  const [squad, setSquad] = useState(null);
  const team_id = props.match.params.id;
  const season = "2020";
  const teamLogo = `https://media.api-sports.io/football/teams/${team_id}.png`;

  useEffect(() => {
    const squadOptions = {
      method: "GET",
      url: `https://api-football-v1.p.rapidapi.com/v2/players/squad/${team_id}/${season}`,
      headers: {
        "x-rapidapi-key": `${API_key}`,
      },
    };

    const getSquad = async function () {
      try {
        const response = await axios.request(squadOptions);
        console.log(response);
        return response;
      } catch (error) {
        console.log(error);
      }
    };

    getSquad().then((response) => setSquad(response.data.api));
  }, [team_id]);

  return <div className={classes.Container}></div>;
};

export default Squad;

// API doesn't have very good coverage of squads - review later
