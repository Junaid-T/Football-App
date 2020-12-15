import React, { useContext } from "react";
import classes from "./Fixtures.module.css";
import { StoreContext } from "../../../Contexts/Store";
import { Link } from "react-router-dom";

const Fixture = (props) => {
  const store = useContext(StoreContext);

  // This allows me to have a different "mode" for fixtures so that I can use it for individual teams.
  let data;
  if (props.type === "Main") {
    data = store.fixtures;
  } else if (props.type === "Team") {
    data = props.data;
  }
  if (!data) return null;

  const fixturesList = data.map((fixture) => {
    return (
      <div key={fixture.fixture_id} className={classes.FixtureContainer}>
        <img
          src={fixture.homeTeam.logo}
          alt={`${fixture.homeTeam.team_name} logo`}
          className={classes.TeamLogos}
        />
        <Link to={`/fixture/${fixture.fixture_id}`} id={fixture.fixture_id}>
          {fixture.homeTeam.team_name}
          <br />
          Vs
          <br />
          {fixture.awayTeam.team_name}
        </Link>
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
