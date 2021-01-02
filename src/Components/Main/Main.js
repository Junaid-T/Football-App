import React from "react";
import classes from "./Main.module.css";

import Fixtures from "../Fixtures/FixturesHome/Fixtures";
import Odds from "../Odds/Odds";
import Table from "../Table/TableSmall/Table";
import Scorers from "../Scorers/Scorers";

const Main = () => {
  return (
    <div className={classes.Container}>
      <Fixtures type="Main" data={null} />
      <Odds />
      <Table />
      <Scorers />
    </div>
  );
};

export default Main;
