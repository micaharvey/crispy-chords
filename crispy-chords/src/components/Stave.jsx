import React, { useState } from "react";
import Vex from "vexflow";
import "../styles/Stave.css";

function Stave() {
  let note = "c";
  let VF;
  let context;
  let stave;
  let group;
  const [message, setMessage] = useState("Type the note on your keyboard");

  const getRandomNote = () => {
    const noteNames = ["a", "b", "c", "d", "e", "f", "g"];
    const rand = Math.random();
    const index = Math.floor(rand * noteNames.length);
    return noteNames[index];
  };

  const checkInput = (k) => {
    if (k !== note) {
      playIncorrectNoteMessage();
      return;
    }

    playCorrectNoteMessage();
    // remove the previously drawn note
    context.svg.removeChild(group);

    const newRawNote = getRandomNote();
    note = newRawNote;
    const newNote = newRawNote + "/4";

    let notes = [
      new VF.StaveNote({
        clef: "treble",
        keys: [newNote],
        duration: "w",
      }),
    ];

    // render notes inside svg group
    group = context.openGroup();
    VF.Formatter.FormatAndDraw(context, stave, notes);
    context.closeGroup();
  };

  const cleanupIntro = () => {
    document.querySelector("#startButton").className = "hide";
    document.querySelector(".message").className = "message";
  };

  const initKeyboardCapture = () => {
    document.addEventListener("keydown", function (e) {
      switch (e.key) {
        case "a":
        case "b":
        case "c":
        case "d":
        case "e":
        case "f":
        case "g":
          e.preventDefault();
          checkInput(e.key);
          break;
        default:
          playIncorrectNoteMessage();
      }
    });
  };

  const initGameOnLoad = () => {
    cleanupIntro();
    initKeyboardCapture();

    VF = Vex.Flow;

    // Create an SVG renderer and attach it to the DIV element named "vexFlowElement".
    const div = document.getElementById("vexFlowElement");
    const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

    // Configure the rendering context.
    renderer.resize(500, 500);
    context = renderer.getContext();
    context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

    // Create a stave of width 400 at position 10, 40 on the canvas.
    stave = new VF.Stave(10, 40, 400);
    // Add a clef and time signature.
    stave.addClef("treble").addTimeSignature("4/4");
    // Connect it to the rendering context and draw!
    stave.setContext(context).draw();

    // add our starting note to the stave
    const startingNote = note + "/4";
    var notes = [
      new VF.StaveNote({ clef: "treble", keys: [startingNote], duration: "w" }),
    ];

    // render notes inside svg group
    group = context.openGroup();
    VF.Formatter.FormatAndDraw(context, stave, notes);
    context.closeGroup();
  };

  // window.onload = (e) => {
  //   initGameOnLoad();
  // };

  function playCorrectNoteMessage() {
    setMessage("Correct!");
    document.querySelector(".message").className = "message";
    window.requestAnimationFrame(function (time) {
      window.requestAnimationFrame(function (time) {
        document.querySelector(".message").className =
          "message correct-changing";
      });
    });
  }

  function playIncorrectNoteMessage() {
    setMessage("Try again");
    document.querySelector(".message").className = "message";
    window.requestAnimationFrame(function (time) {
      window.requestAnimationFrame(function (time) {
        document.querySelector(".message").className =
          "message incorrect-changing";
      });
    });
  }

  return (
    <div className="Stave">
      <h1>Name that note!</h1>
      <button
        id="startButton"
        onClick={() => {
          initGameOnLoad();
        }}
      >
        Click Here to begin
      </button>
      <h3 className="message hide" style={{ margin: "0 40px" }}>
        {message}
      </h3>
      <div id="vexFlowElement"></div>
    </div>
  );
}

export default Stave;
