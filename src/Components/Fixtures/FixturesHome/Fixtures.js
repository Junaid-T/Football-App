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

  const formatDate = (date) => {
    const day = date.slice(0, 10);
    const data = day.split("-");
    const newDay = data[2] + "-" + data[1] + "-" + data[0];
    return newDay;
  };

  const fixturesList = data.map((fixture) => {
    return (
      <div key={fixture.fixture_id} className={classes.FixturesContainer}>
        <img
          src={fixture.homeTeam.logo}
          alt={`${fixture.homeTeam.team_name} logo`}
          className={classes.TeamLogos}
        />
        <Link
          to={`/fixture/${fixture.fixture_id}`}
          id={fixture.fixture_id}
          className={classes.Fixture}
        >
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
        <p>{formatDate(fixture.event_date)}</p>
      </div>
    );
  });

  return <div className={classes.Container}>{fixturesList}</div>;
};

export default Fixture;
