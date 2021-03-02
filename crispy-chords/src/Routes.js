import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Chords from "./components/Chords";
import Tab from "./components/Tab";
import Stave from "./components/Stave";
import PianoExample from "./components/Piano";
import Sequencer from "./components/Sequencer";
import Homepage from "./components/Homepage";
import Layout from "./components/Layout";

const Routes = (props) => {
  return (
    <Layout>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/chords" component={Homepage} />
      <Route path="/chords/:songName" component={Chords} />
      <Route path="/tab/:songName" component={Tab} />
      <Route path="/stave" component={Stave} />
      <Route path="/piano" component={PianoExample} />
      <Route path="/sequencer" component={Sequencer} />
    </Layout>
  );
};

export default Routes;
