import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Main from "./Containers/Main/Main";
import { BrowserRouter, Route } from "react-router-dom";
import Table from "./Components/Table/TableFull/TableFull";
import Statistics from "./Components/Scorers/Full Statistics/Full Statistics";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route path="/" exact component={Main} />
        <Route path="/table" component={Table} />
        <Route path="/topscorers" component={Statistics} />
      </BrowserRouter>
    </div>
  );
}

export default App;
