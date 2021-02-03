import React, { useState } from "react";
import raw from "../assets/chords/1ready/Headlights";
import "../styles/Chords.css";

function Chords() {
  const [song, setSong] = useState("");
  fetch(raw)
    .then((r) => r.text())
    .then((text) => {
      setSong(text);
    });
  return <pre className="song">{song}</pre>;
}

export default Chords;
