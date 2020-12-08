import React, { useState, useEffect } from "react";
import classes from "./Main.module.css";

import Fixtures from "../../Components/Fixtures/FixturesHome/Fixtures";
import News from "../../Components/News/News";
import Table from "../../Components/Table/TableSmall/Table";
import Scorers from "../../Components/Scorers/Scorers";

const Main = () => {
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
