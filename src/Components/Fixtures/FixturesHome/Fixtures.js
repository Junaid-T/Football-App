import React, { useContext } from "react";
import classes from "./Fixtures.module.css";
import { StoreContext } from "../../../Contexts/Store";

const Fixture = () => {
  const store = useContext(StoreContext);

  const fixturesList = store.fixtures.map((fixture) => {
    return (
      <div key={fixture.fixture_id} className={classes.FixtureContainer}>
        <img
          src={fixture.homeTeam.logo}
          alt={`${fixture.homeTeam.team_name} logo`}
          className={classes.TeamLogos}
        />
        <div>{fixture.homeTeam.team_name}</div>
        <div>Vs</div>
        <div>{fixture.awayTeam.team_name}</div>
        <img
          src={fixture.awayTeam.logo}
          alt={`${fixture.awayTeam.team_name} logo`}
          className={classes.TeamLogos}
        />
      </div>
    );
  });
  return <div className={classes.Container}>{fixturesList}</div>;
};

export default Fixture;

// Link each fixture to a full page analysis of it
// r-r-d to full componant and pass along the id
// first make that new Componant
