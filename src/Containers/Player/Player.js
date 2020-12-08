import React, { useEffect, useState } from "react";
import classes from "./Player.module.css";
import axios from "axios";
import { API_key } from "../../SECRETS";

const Player = (props) => {
  const id = "18766";
  const [player, setPlayer] = useState(null);
  // Fetch the player data
  useEffect(() => {
    const playerOptions = {
      method: "GET",
      url: `https://api-football-v1.p.rapidapi.com/v2/players/player/${id}`,
      headers: {
        "x-rapidapi-key": `${API_key}`,
      },
    };

    const getFixtures = async function () {
      try {
        const response = await axios.request(playerOptions);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    getFixtures().then((response) => setPlayer(response.data.apiplayers[0]));
  }, []);

  return <div className={classes.Container}></div>;
};

export default Player;
