import React, { useEffect, useState, useContext } from "react";
import classes from "./Squad.module.css";
import { API_key } from "../../../SECRETS";
import axios from "axios";
import { StoreContext } from "../../../Contexts/Store";

const Squad = (props) => {
  const [squad, setSquad] = useState([]);
  const team_id = props.match.params.id;
  const season = "2020";
  const store = useContext(StoreContext);

  const showPlayer = (e) => {
    store.setPopup(true);
    store.setActivePlayer(e.target.id);
  };

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

    getSquad().then((response) => setSquad(response.data.api.players));
  }, [team_id]);

  const team = squad.map((player) => {
    return (
      <li>
        <p onClick={showPlayer} id={player.player_id}>
          {player.firstname} + {player.lastname}
        </p>
      </li>
    );
  });

  return <ul className={classes.Container}>{team}</ul>;
};

export default Squad;
