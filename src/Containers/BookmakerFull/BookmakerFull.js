import React, { useContext, useState, useEffect } from "react";
import classes from "./BookmakerFull.module.css";
import getData from "../../helper";
import { StoreContext } from "../../Contexts/Store";

const BookmakerFull = (props) => {
  const store = useContext(StoreContext);
  const nextFixtures = store.fixtures;
  const bookmakers = store.bookmakers;

  //   const id = props.match.params.bookmaker_id;
  //   const [activeFixture, setActiveFixture] = useState(null);

  const id = 3;
  const activeFixture = 592141;
  const [odds, setOdds] = useState(null);

  useEffect(() => {
    getData(
      `https://api-football-v1.p.rapidapi.com/v2/odds/fixture/${activeFixture}/bookmaker/${id}`
    ).then((data) => console.log(data));
  }, [activeFixture, id]);

  const bookmakersButtons = bookmakers.map((bookmaker) => {
    return (
      <div className={classes.Bookmaker} key={bookmaker.bookmaker_id}>
        {bookmaker.name}
      </div>
    );
  });

  const fixtureButtons = nextFixtures.map((fixture) => {
    return (
      <div className={classes.Fixture} key={fixture.fixture_id}>
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

  // API COVERAGE OF ODDS IS NOT GREAT- REVIEW LATER
  return (
    <div className={classes.Container}>
      <div className={classes.BookmakersContainer}>{bookmakersButtons}</div>
      <div className={classes.FixturesContainer}>{fixtureButtons}</div>
      <div className={classes.OddsContainer}></div>
    </div>
  );
};

export default BookmakerFull;
/*
0: {id: 1, label: "Match Winner"}
1: {id: 2, label: "Home/Away"}
2: {id: 3, label: "Second Half Winner"}
3: {id: 4, label: "Asian Handicap"}
4: {id: 5, label: "Goals Over/Under"}
5: {id: 6, label: "Goals Over/Under First Half"}
6: {id: 7, label: "HT/FT Double"}
7: {id: 8, label: "Both Teams Score"}
8: {id: 9, label: "Handicap Result"}
9: {id: 10, label: "Exact Score"}
10: {id: 11, label: "Highest Scoring Half"}
11: {id: 12, label: "Double Chance"}
12: {id: 13, label: "First Half Winner"}
13: {id: 14, label: "Team To Score First"}
14: {id: 15, label: "Team To Score Last"}
15: {id: 16, label: "Total - Home"}
16: {id: 17, label: "Total - Away"}
17: {id: 18, label: "Handicap Result - First Half"}
18: {id: 19, label: "Asian Handicap First Half"}
19: {id: 20, label: "Double Chance - First Half"}
20: {id: 21, label: "Odd/Even"}
21: {id: 22, label: "Odd/Even - First Half"}
22: {id: 23, label: "Home Odd/Even"}
23: {id: 24, label: "Results/Both Teams Score"}
24: {id: 25, label: "Result/Total Goals"}
25: {id: 26, label: "Goals Over/Under - Second Half"}
26: {id: 27, label: "Clean Sheet - Home"}
27: {id: 28, label: "Clean Sheet - Away"}
28: {id: 29, label: "Win to Nil - Home"}
29: {id: 30, label: "Win to Nil - Away"}
30: {id: 31, label: "Correct Score - First Half"}
31: {id: 32, label: "Win Both Halves"}
32: {id: 33, label: "Double Chance - Second Half"}
33: {id: 34, label: "Both Teams Score - First Half"}
34: {id: 35, label: "Both Teams To Score - Second Half"}
35: {id: 36, label: "Win To Nil"}
36: {id: 37, label: "Home win both halves"}
37: {id: 38, label: "Exact Goals Number"}
38: {id: 39, label: "To Win Either Half"}
39: {id: 40, label: "Home Team Exact Goals Number"}
40: {id: 41, label: "Away Team Exact Goals Number"}
41: {id: 42, label: "Second Half Exact Goals Number"}
42: {id: 43, label: "Home Team Score a Goal"}
43: {id: 44, label: "Away Team Score a Goal"}
44: {id: 45, label: "Corners Over Under"}
45: {id: 46, label: "Exact Goals Number - First Half"}
46: {id: 47, label: "Winning Margin"}
47: {id: 48, label: "To Score In Both Halves By Teams"}
48: {id: 49, label: "Total Goals/Both Teams To Score"}
49: {id: 50, label: "Goal Line"}
50: {id: 51, label: "Halftime Result/Total Goals"}
51: {id: 52, label: "Halftime Result/Both Teams Score"}
52: {id: 53, label: "Away win both halves"}
53: {id: 54, label: "First 10 min Winner"}
54: {id: 55, label: "Corners 1x2"}
55: {id: 56, label: "Corners Asian Handicap"}
56: {id: 57, label: "Home Corners Over/Under"}
57: {id: 58, label: "Away Corners Over/Under"}
58: {id: 59, label: "Own Goal"}
59: {id: 60, label: "Away Odd/Even"}
60: {id: 61, label: "To Qualify"}
61: {id: 62, label: "Correct Score - Second Half"}
62: {id: 63, label: "Odd/Even - Second Half"}
63: {id: 72, label: "Goal Line (1st Half)"}
64: {id: 73, label: "Both Teams to Score 1st Half - 2nd Half"}
65: {id: 74, label: "10 Over/Under"}
66: {id: 75, label: "Last Corner"}
67: {id: 76, label: "First Corner"}
68: {id: 77, label: "Total Corners (1st Half)"}
69: {id: 78, label: "RTG_H1"}
70: {id: 79, label: "Cards European Handicap"}
71: {id: 80, label: "Cards Over/Under"}
72: {id: 81, label: "Cards Asian Handicap"}
73: {id: 82, label: "Home Team Total Calrds"}
74: {id: 83, label: "Away Team Total Cards"}
75: {id: 84, label: "Total Corners (3 way) (1st Half)"}
76: {id: 85, label: "Total Corners (3 way)"}
77: {id: 86, label: "RCARD"}
78: {id: 87, label: "Total ShotOnGoal"}
79: {id: 88, label: "Home Total ShotOnGoal"}
80: {id: 89, label: "Away Total ShotOnGoal"}
*/
