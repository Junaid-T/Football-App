import React, { useEffect } from "react";
import classes from "./Table.module.css";
import axios from "axios";

const table = () => {
  const getData = async function () {
    try {
      const options = {
        method: "GET",
        //url: "https://api-football-v1.p.rapidapi.com/v2/leagueTable/524",
        url:
          "https://v3.football.api-sports.io/standings?league=39&season=2019",
        headers: {
          "x-rapidapi-key":
            "a0272a4936mshf37852dcde693bcp1dbf3bjsn0feda5ecaac5",
          "x-rapidapi-host": "v3.football.api-sports.io",
        },
      };

      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  //getData();
  return <div className={classes.Temp}></div>;
};

export default table;
