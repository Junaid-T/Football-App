import React, { useContext, useState, useEffect } from "react";
import classes from "./BookmakerFull.module.css";
import getData from "../../helper";
import { StoreContext } from "../../Contexts/Store";

const BookmakerFull = (props) => {
  const store = useContext(StoreContext);
  const nextFixtures = store.fixtures;
  const bookmakers = store.bookmakers;
  const [id, setID] = useState(props.match.params.bookmaker_id);
  const [activeFixture, setActiveFixture] = useState(592141);

  const [odds, setOdds] = useState(null);

  useEffect(() => {
    getData(
      `https://api-football-v1.p.rapidapi.com/v2/odds/fixture/${activeFixture}/bookmaker/${id}`
    ).then((data) => {
      setOdds(data.data.api);
    });
  }, [activeFixture, id]);

  const changeBookmaker = (e) => {
    setID(e.target.id);
  };
  const bookmakersButtons = bookmakers.map((bookmaker) => {
    return (
      <div
        onClick={changeBookmaker}
        className={
          bookmaker.id === parseInt(id)
            ? classes.BookmakerActive
            : classes.Bookmaker
        }
        key={bookmaker.id}
        id={bookmaker.id}
      >
        {bookmaker.name}
      </div>
    );
  });

  const changeFixture = (e) => {
    console.log(activeFixture);
    setActiveFixture(e.target.id);
  };
  const fixtureButtons = nextFixtures.map((fixture) => {
    return (
      <div
        className={
          parseInt(activeFixture) === parseInt(fixture.fixture_id)
            ? classes.FixtureActive
            : classes.Fixture
        }
        key={fixture.fixture_id}
        onClick={changeFixture}
        id={fixture.fixture_id}
      >
        <img
          className={classes.TeamLogo}
          src={fixture.homeTeam.logo}
          alt="Home Team"
        />
        Vs
        <img
          className={classes.TeamLogo}
          src={fixture.awayTeam.logo}
          alt="Away Team"
        />
      </div>
    );
  });

  const content = () => {
    if (odds) {
      return (
        <h2>
          We do't have any odd available right now, please check back later
        </h2>
      );
      // console.log(odds);
      // return odds.map((odd) => {
      //   return <li key={odd.label_id}>{odd.label_name}</li>;
      // });
    } else {
      return (
        <div>
          We don't have any odd available at this time, please try again later{" "}
          {id} {activeFixture}
        </div>
      );
    }
  };

  return (
    <div className={classes.Container}>
      <div className={classes.BookmakersContainer}>{bookmakersButtons}</div>
      <div className={classes.FixturesContainer}>{fixtureButtons}</div>
      <ul className={classes.OddsContainer}>{content()}</ul>
    </div>
  );
};

export default BookmakerFull;
