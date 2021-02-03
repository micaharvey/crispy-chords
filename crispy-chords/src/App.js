import React from "react";
import { HashRouter, Switch } from "react-router-dom";
import "./App.css";
import Routes from "./Routes";

function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Routes />
      </Switch>
    </HashRouter>
  );
}

export default App;
