import React from "react";
import webmidi from "webmidi";
import { Button } from "semantic-ui-react";
import "../styles/MidiFreeplay.css";
import MIDISounds from "midi-sounds-react";

function MidiFreeplay() {
  let midiSounds;

  const playNote = (note) => {
    switch (note) {
      case 48:
        midiSounds.playChordNow(0, [48, 52, 55], 0.25);
        break;
      case 50:
        midiSounds.playChordNow(0, [52, 55, 59], 0.25);
        break;
      case 52:
        midiSounds.playChordNow(0, [53, 57, 60], 0.25);
        break;
      case 55:
        midiSounds.playChordNow(0, [55, 59, 62], 0.25);
        break;
      default:
        midiSounds.playChordNow(0, [note], 0.5);
    }
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
          break;
        default:
          console.log(e.key);
      }
    });
  };

  const midiCallback = (e) => {
    console.log(e);
    console.log(e.note);
    console.log(
      "Received 'noteon' message (" + e.note.name + e.note.octave + ")."
    );
    playNote(e.note.number);
  };

  const initWebMidi = () => {
    // enable web midi
    webmidi.enable(function (err) {
      if (err) {
        console.log("WebMidi could not be enabled.", err);
      } else {
        console.log("WebMidi enabled!");
      }

      // we need at least one input to turn on midi
      if (webmidi.inputs.length < 1) return;
      const input = webmidi.inputs[0];

      // Listen for a 'note on' message on all channels
      input.addListener("noteon", "all", (e) => {
        midiCallback(e);
      });
    });
  };

  const setMidiSoundsVolume = () => {
    midiSounds.setEchoLevel(0);
    midiSounds.setMasterVolume(0.3);
  };

  const initMidiFreeplay = () => {
    initKeyboardCapture();
    initWebMidi();
    setMidiSoundsVolume();
  };

  return (
    <div id="MidiFreeplay" className="midi-freeplay">
      <h1>Midi Freeplay!</h1>
      <Button
        id="startButton"
        onClick={() => {
          initMidiFreeplay();
        }}
      >
        Click Here to freeplay
      </Button>
      <div className="hide">
        <MIDISounds
          ref={(ref) => (midiSounds = ref)}
          appElementName="root"
          instruments={[0]}
        />
      </div>
    </div>
  );
}

export default MidiFreeplay;
