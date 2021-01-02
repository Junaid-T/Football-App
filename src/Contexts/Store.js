import React, { useState, useEffect, createContext } from "react";
import getData from "../helper";

export const StoreContext = createContext();

export const StoreProvider = (props) => {
  const [popup, setPopup] = useState(false);
  const [activePlayer, setActivePlayer] = useState(null);
  const [leagueTable, setLeagueTable] = useState([]);
  const [topScorers, setTopScorers] = useState([]);
  const [fixtures, setFixtures] = useState([]);
  const [bookmakers, setBookmakers] = useState(null);

  // Get the Standings
  useEffect(() => {
    //Standings
    getData(
      "https://api-football-v1.p.rapidapi.com/v2/leagueTable/2790"
    ).then((response) => setLeagueTable(response.data.api.standings[0]));

    // Scorers
    getData(
      "https://api-football-v1.p.rapidapi.com/v2/topscorers/2790"
    ).then((response) => setTopScorers(response.data.api.topscorers));

    // Fixtures
    getData(
      "https://api-football-v1.p.rapidapi.com/v2/fixtures/league/2790/next/10"
    ).then((response) => setFixtures(response.data.api.fixtures));

    // Bookmakers
    getData(
      "https://api-football-v1.p.rapidapi.com/v2/odds/bookmakers/"
    ).then((response) => setBookmakers(response.data.api.bookmakers));
  }, []);

  return (
    <StoreContext.Provider
      value={{
        popup,
        setPopup,
        activePlayer,
        setActivePlayer,
        leagueTable,
        setLeagueTable,
        topScorers,
        setTopScorers,
        fixtures,
        bookmakers,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};
