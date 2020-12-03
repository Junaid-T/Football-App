import React, { useState, useEffect } from "react";
import classes from "./Main.module.css";
import TableFull from "../../Components/Table/TableFull/TableFull";
import FullStatistics from "../../Components/Scorers/Full Statistics/Full Statistics";

import Fixtures from "../../Components/Fixtures/Fixtures";
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
      <TableFull />
      <FullStatistics />
    </div>
  );
};

export default Main;
