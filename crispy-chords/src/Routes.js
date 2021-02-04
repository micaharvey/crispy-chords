import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Stave from "./components/Stave";
import Chords from "./components/Chords";
import Homepage from "./components/Homepage";
import Layout from "./components/Layout";

const Routes = (props) => {
  return (
    <Layout>
      <Route exact path="/" component={Homepage} />
      <Route path="/stave" component={Stave} />
      <Route exact path="/chords" component={Homepage} />
      <Route path="/chords/:songName" component={Chords} />
    </Layout>
  );
};

export default Routes;
