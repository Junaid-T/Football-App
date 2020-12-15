import React from "react";
import classes from "./Main.module.css";

import Fixtures from "../Fixtures/FixturesHome/Fixtures";
import News from "../News/News";
import Table from "../Table/TableSmall/Table";
import Scorers from "../Scorers/Scorers";

const Main = () => {
  return (
    <div className={classes.Container}>
      <Fixtures type="Main" data={null} />
      <News />
      <Table />
      <Scorers />
    </div>
  );
};

export default Main;
