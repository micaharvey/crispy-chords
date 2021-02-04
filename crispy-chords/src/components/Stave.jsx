import React from "react";
import { Piano } from "@tonejs/piano";
import { Button, Card } from "semantic-ui-react";
import Vex from "vexflow";
import "../styles/Stave.css";

const noteToMidi = {
  a: 69,
  b: 71,
  c: 60,
  d: 62,
  e: 64,
  f: 65,
  g: 67,
  A: 69,
  B: 71,
  C: 60,
  D: 62,
  E: 64,
  F: 65,
  G: 67,
};

function Stave() {
  let note = "c";
  let VF;
  let context;
  let stave;
  let group;
  let pianoLoaded = false;
  let piano;
  const message = "Select the correct note";

  const getRandomNote = () => {
    const noteNames = ["a", "b", "c", "d", "e", "f", "g"];
    const rand = Math.random();
    const index = Math.floor(rand * noteNames.length);
    return noteNames[index];
  };

  const checkInput = (k) => {
    console.log(k);
    console.log(VF, stave, context);
    if (k.toLowerCase() !== note.toLowerCase()) {
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

  const initPiano = () => {
    // hide the start button
    document.querySelector("#startButton").className = "hide";
    document.querySelector(".loader").className = "loader";
    window.requestAnimationFrame(function (time) {
      window.requestAnimationFrame(function (time) {
        document.querySelector(".loader").className = "loader loading";
      });
    });

    piano = new Piano({
      velocities: 5,
    });

    // Connect piano to speaker output
    piano.toDestination();

    piano.load().then(() => {
      // console.log("Piano Loaded");
      pianoLoaded = true;
      document.querySelector(".loader").className = "loader hide";
      initGameOnLoad();
    });
  };

  const initGameOnLoad = () => {
    document.querySelector(".message").className = "message";
    document.querySelector(".buttonKeyboard").className = "buttonKeyboard";
    initKeyboardCapture();

    VF = Vex.Flow;

    // Create an SVG renderer and attach it to the DIV element named "vexFlowElement".
    const div = document.getElementById("vexFlowElement");
    const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

    // Configure the rendering context.
    renderer.resize(200, 200);
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

  function playCorrectNoteMessage() {
    if (pianoLoaded) {
      // play the note and release in half a second
      piano.keyDown({ midi: noteToMidi[note], velocity: 0.33 });
      piano.keyUp({ midi: noteToMidi[note], time: "+0.5" });
    }

    // update the message and play the animation
    // setMessage("Correct!");
    document.querySelector(".message").className = "message";
    window.requestAnimationFrame(function (time) {
      window.requestAnimationFrame(function (time) {
        document.querySelector(".message").className =
          "message correct-changing";
      });
    });
  }

  function playIncorrectNoteMessage() {
    // setMessage("Try again");
    document.querySelector(".message").className = "message";
    window.requestAnimationFrame(function (time) {
      window.requestAnimationFrame(function (time) {
        document.querySelector(".message").className =
          "message incorrect-changing";
      });
    });
  }

  const buttonKeyboardClicked = (e, note) => {
    e.preventDefault();
    console.log(e, note);
    checkInput(note);
  };

  return (
    <div className="Stave">
      <h1>Name that note!</h1>
      <Button
        id="startButton"
        onClick={() => {
          initPiano();
        }}
      >
        Click Here to begin
      </Button>
      <h3 className="message hide" style={{ margin: "0 40px" }}>
        {message}
      </h3>
      <div className="loader hide"></div>
      <div id="vexFlowElement"></div>
      <div className="buttonKeyboard hide">
        <Button
          onClick={(e) => {
            e.preventDefault();
            buttonKeyboardClicked(e, "a");
          }}
        >
          A
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            buttonKeyboardClicked(e, "b");
          }}
        >
          B
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            buttonKeyboardClicked(e, "c");
          }}
        >
          C
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            buttonKeyboardClicked(e, "d");
          }}
        >
          D
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            buttonKeyboardClicked(e, "e");
          }}
        >
          E
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            buttonKeyboardClicked(e, "f");
          }}
        >
          F
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            buttonKeyboardClicked(e, "g");
          }}
        >
          G
        </Button>
      </div>
    </div>
  );
}

export default Stave;
