import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { API_key } from "../SECRETS";

export const StoreContext = createContext();

export const StoreProvider = (props) => {
  const [popup, setPopup] = useState(true);
  const [activeItem, setActiveItem] = useState(true); // USE FOR PLAYER & TEAM - SET THOSE SEPARATE TO POP- REUSE
  const [leagueTable, setLeagueTable] = useState([]);
  const [topScorers, setTopScorers] = useState([]);
  const [fixtures, setFixtures] = useState([]);

  // Get the Standings
  useEffect(() => {
    const leagueOptions = {
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v2/leagueTable/2790",
      headers: {
        "x-rapidapi-key": `${API_key}`,
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
        "x-rapidapi-key": `${API_key}`,
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

  // Get Fixtures
  useEffect(() => {
    const fixtureOptions = {
      method: "GET",
      url:
        "https://api-football-v1.p.rapidapi.com/v2/fixtures/league/2790/next/10",
      headers: {
        "x-rapidapi-key": `${API_key}`,
      },
    };

    const getFixtures = async function () {
      try {
        const response = await axios.request(fixtureOptions);
        return response;
      } catch (error) {
        console.log(error);
      }
    };

    getFixtures().then((response) => setFixtures(response.data.api.fixtures));
  }, []);

  return (
    <StoreContext.Provider
      value={{
        popup: popup,
        setPopup: setPopup,
        leagueTable: leagueTable,
        setLeagueTable: setLeagueTable,
        topScorers: topScorers,
        setTopScorers: setTopScorers,
        fixtures: fixtures,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};
