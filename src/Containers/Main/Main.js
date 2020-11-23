import React, { useState, useEffect } from "react";
import classes from "./Main.module.css";
import axios from "axios";

import Fixtures from "../../Components/Fixtures/Fixtures";
import News from "../../Components/News/News";
import Table from "../../Components/Table/Table";
import Scorers from "../../Components/Scorers/Scorers";

const Main = () => {
  const [activeTeam, setActiveTeam] = useState("");

  const getData = async function () {
    try {
      const options = {
        method: "GET",
        url: "https://api-football-beta.p.rapidapi.com/standings",
        headers: {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key":
            "a0272a4936mshf37852dcde693bcp1dbf3bjsn0feda5ecaac5",
        },
      };

      const response = await axios.request(options);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  getData();

  const changeTeam = () => {};
  return (
    <div className={classes.Container}>
      <Fixtures />
      <News />
      <Table />
      <Scorers />
    </div>
  );
};

export default Main;
