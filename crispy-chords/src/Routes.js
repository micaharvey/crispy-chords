import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Chords from "./components/Chords";
import Stave from "./components/Stave";
import PianoExample from "./components/Piano";
import Homepage from "./components/Homepage";
import Layout from "./components/Layout";

const Routes = (props) => {
  return (
    <Layout>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/chords" component={Homepage} />
      <Route path="/chords/:songName" component={Chords} />
      <Route path="/stave" component={Stave} />
      <Route path="/piano" component={PianoExample} />
    </Layout>
  );
};

export default Routes;
