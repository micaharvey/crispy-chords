import React, { useState } from "react";
import { useParams } from "react-router-dom";
import headlights from "../assets/chords/1ready/Headlights";
import dontPanic from "../assets/chords/1ready/Dont Panic - Coldplay";
import dontThinkTwice from "../assets/chords/1ready/Dont Think Twice Its Alright - Bob Dylan";
import "../styles/Chords.css";

const Chords = (props) => {
  const { songName } = useParams();
  console.log(songName);
  const [song, setSong] = useState("");

  if (typeof songName === "undefined" || songName === "") {
    return <div />;
  }

  switch (songName) {
    case "headlights":
      fetch(headlights)
        .then((r) => r.text())
        .then((text) => {
          setSong(text);
        });
      break;
    case "dont-panic":
      fetch(dontPanic)
        .then((r) => r.text())
        .then((text) => {
          setSong(text);
        });
      break;
    case "dont-think-twice":
      fetch(dontThinkTwice)
        .then((r) => r.text())
        .then((text) => {
          setSong(text);
        });
      break;
    default:
      fetch(headlights)
        .then((r) => r.text())
        .then((text) => {
          setSong(text);
        });
  }
  return <pre className="song">{song}</pre>;
};

export default Chords;
