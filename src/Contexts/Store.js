import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const StoreContext = createContext();

export const StoreProvider = (props) => {
  const [leagueTable, setLeagueTable] = useState([]);
  const [topScorers, setTopScorers] = useState([]);

  // Get the Standings
  useEffect(() => {
    const leagueOptions = {
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v2/leagueTable/2790",
      headers: {
        "x-rapidapi-key": "a0272a4936mshf37852dcde693bcp1dbf3bjsn0feda5ecaac5",
      },
    };

    const getLeague = async function () {
      try {
        const response = await axios.request(leagueOptions);
        return response;
      } catch (error) {
        console.log(error);
      }
    };

    getLeague().then((response) =>
      setLeagueTable(response.data.api.standings[0])
    );
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////
  }, []);

  // Get the Top Scorers
  useEffect(() => {
    const scorersOptions = {
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v2/topscorers/2790",
      headers: {
        "x-rapidapi-key": "a0272a4936mshf37852dcde693bcp1dbf3bjsn0feda5ecaac5",
      },
    };

    const getScorers = async function () {
      try {
        const response = await axios.request(scorersOptions);
        return response;
      } catch (error) {
        console.log(error);
      }
    };

    getScorers().then((response) =>
      setTopScorers(response.data.api.topscorers)
    );
  }, []);

  return (
    <StoreContext.Provider
      value={[leagueTable, setLeagueTable, topScorers, setTopScorers]}
    >
      {props.children}
    </StoreContext.Provider>
  );
};
