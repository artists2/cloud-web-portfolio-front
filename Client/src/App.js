import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notify from "./pages/Notify";
import Chart  from "./pages/Chart";
import Graph from "./pages/Graph";
import Signin from "./pages/Signin";



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Signin} />
          <Route path="/notify"  component={Notify} />
          <Route path="/chart" component={Chart} />
          <Route path="/graph" component={Graph} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
