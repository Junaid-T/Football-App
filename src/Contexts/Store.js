import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const StoreContext = createContext();

export const StoreProvider = (props) => {
  const [leagueTable, setLeagueTable] = useState("");

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
  }, []);

  console.log(leagueTable);
  return (
    <StoreContext.Provider value={[leagueTable, setLeagueTable]}>
      {props.children}
    </StoreContext.Provider>
  );
};
