import React from "react";
import { HashRouter } from "react-router-dom";
import "./App.css";
import Routes from "./Routes";

function App() {
  return (
    <HashRouter basename="/">
      <Routes />
    </HashRouter>
  );
}

export default App;
