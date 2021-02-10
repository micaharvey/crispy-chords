import React, { useState } from "react";
import { useParams } from "react-router-dom";
import headlights from "../assets/chords/1ready/Headlights";
import dontPanic from "../assets/chords/1ready/Dont Panic - Coldplay";
import wayOverYonder from "../assets/chords/1ready/Billy Bragg and Wilco - Way Over Yonder In The Min";
import crazy from "../assets/chords/1ready/Crazy - Gnarls Barkley";
import illFollowYou from "../assets/chords/1ready/I Will Follow You Into The Dark - Death Cab For Cu";
import inMyLife from "../assets/chords/1ready/In my life - Beatles";
import laundryRoom from "../assets/chords/1ready/Laundry Room - The Avett Brothers";
import newSlang from "../assets/chords/1ready/New Slang - The Shins";
import oneDay from "../assets/chords/1ready/One Day - Sharon Van Etten";
import suchGreatHeights from "../assets/chords/1ready/Such Great Heights - Postal Service,";
import wagonWheel from "../assets/chords/1ready/Wagon Wheel - Old Crow Medicine Show";
import wonderfulWorld from "../assets/chords/1ready/What A Wonderful World";
import wishYouWereHere from "../assets/chords/1ready/Wish You Were Here - Pink Floyd";
import dontThinkTwice from "../assets/chords/1ready/Dont Think Twice Its Alright - Bob Dylan";
import "../styles/Chords.css";

const Chords = (props) => {
  const { songName } = useParams();
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
    case "way-over-yonder":
      fetch(wayOverYonder)
        .then((r) => r.text())
        .then((text) => {
          setSong(text);
        });
      break;
    case "crazy":
      fetch(crazy)
        .then((r) => r.text())
        .then((text) => {
          setSong(text);
        });
      break;
    case "ill-follow-you":
      fetch(illFollowYou)
        .then((r) => r.text())
        .then((text) => {
          setSong(text);
        });
      break;
    case "in-my-life":
      fetch(inMyLife)
        .then((r) => r.text())
        .then((text) => {
          setSong(text);
        });
      break;
    case "laundry-room":
      fetch(laundryRoom)
        .then((r) => r.text())
        .then((text) => {
          setSong(text);
        });
      break;
    case "new-slang":
      fetch(newSlang)
        .then((r) => r.text())
        .then((text) => {
          setSong(text);
        });
      break;
    case "one-day":
      fetch(oneDay)
        .then((r) => r.text())
        .then((text) => {
          setSong(text);
        });
      break;
    case "such-great-heights":
      fetch(suchGreatHeights)
        .then((r) => r.text())
        .then((text) => {
          setSong(text);
        });
      break;
    case "wagon-wheel":
      fetch(wagonWheel)
        .then((r) => r.text())
        .then((text) => {
          setSong(text);
        });
      break;
    case "wonderful-world":
      fetch(wonderfulWorld)
        .then((r) => r.text())
        .then((text) => {
          setSong(text);
        });
      break;
    case "wish-you-were-here":
      fetch(wishYouWereHere)
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
