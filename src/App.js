import "./App.css";
import { useContext } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { StoreContext } from "./Contexts/Store";
import NavBar from "./Components/NavBar/NavBar";
import Main from "./Components/Main/Main";
import Table from "./Components/Table/TableFull/TableFull";
import Statistics from "./Components/Scorers/Full Statistics/Full Statistics";
import Player from "./Containers/Player/Player";
import Team from "./Containers/Team/Team";
import FixtureFull from "./Containers/DetailedFixture/DetailedFixture";
import Results from "./Containers/Results/Results";

function App() {
  const store = useContext(StoreContext);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route path="/" exact component={Main} />
        <Route path="/table" component={Table} />
        <Route path="/topscorers" component={Statistics} />
        <Route path="/team/:id" component={Team} />
        <Route path="/fixture/:fixture" component={FixtureFull} />
        <Route path="/results" component={Results} />
      </BrowserRouter>
      {store.popup ? <Player /> : null}
    </div>
  );
}

export default App;
