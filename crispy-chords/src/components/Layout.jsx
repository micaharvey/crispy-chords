import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Layout.css";

const Route = (props) => {
  return (
    <div className="layout">
      <Header />
      <div className="main-content"> {props.children} </div>
      <Footer />
    </div>
  );
};

export default Route;
