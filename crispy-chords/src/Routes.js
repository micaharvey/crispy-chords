import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Stave from "./components/Stave";
import Chords from "./components/Chords";
import FixedMenuLayout from "./components/FixedMenuLayout";
import Layout from "./components/Layout";

const Routes = (props) => {
  return (
    <Layout>
      {/* <Switch> */}
      <Route exact path="/" component={FixedMenuLayout} />
      <Route path="/stave" component={Stave} />
      <Route exact path="/chords" component={FixedMenuLayout} />
      <Route path="/chords/:songName" component={Chords} />
      {/* </Switch> */}
    </Layout>
  );
};

export default Routes;
