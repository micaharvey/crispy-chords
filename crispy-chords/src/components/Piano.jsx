import React, { Component } from "react";
import MIDISounds from "midi-sounds-react";
import "../styles/Piano.css";

const STYLE = {
  keyWhite: {
    backgroundColor: "#dddddd",
    width: "0.5cm",
    height: "0.75cm",
  },
  keyWhitePress: {
    backgroundColor: "#aaaaff",
    width: "0.5cm",
    height: "0.75cm",
  },
  keyBlack: {
    backgroundColor: "#333333",
    width: "0.5cm",
    height: "0.5cm",
  },
  keyBlackPress: {
    backgroundColor: "#000099",
    width: "0.5cm",
    height: "0.5cm",
  },
  keyNo: {
    width: "0.5cm",
    height: "0.5cm",
  },
  keyMargin: {
    width: "0.25cm",
    height: "0.5cm",
  },
};

class PianoExample extends Component {
  constructor(props) {
    super(props);
    this.midiNotes = [];
    this.options = [];
    this.state = {
      selectedInstrument: 6,
      status: "?",
    };
  }
  componentDidMount() {
    this.envelopes = [];
    this.startListening();
    this.initKeyboardCapture();
    this.createSemanticSelectOptions();
    this.setEchoVolume();
  }

  setEchoVolume(e) {
    if (this.midiSounds) {
      this.midiSounds.setEchoLevel(0);
      this.midiSounds.setMasterVolume(0.3);
    }
  }

  onSelectInstrument(e) {
    var list = e.target;
    let n = list.options[list.selectedIndex].getAttribute("value");
    this.setState({
      selectedInstrument: n,
    });
    this.midiSounds.cacheInstrument(n);
  }

  createSelectItems() {
    if (this.midiSounds) {
      if (!this.items) {
        this.items = [];
        for (
          let i = 0;
          i < this.midiSounds.player.loader.instrumentKeys().length;
          i++
        ) {
          this.items.push(
            <option key={i} value={i}>
              {"" +
                (i + 0) +
                ". " +
                this.midiSounds.player.loader.instrumentInfo(i).title}
            </option>
          );
        }
      }
      return this.items;
    }
  }

  createSemanticSelectOptions() {
    if (this.midiSounds) {
      if (this.options.length < 1) {
        this.options = [];
        for (
          let i = 0;
          i < this.midiSounds.player.loader.instrumentKeys().length;
          i++
        ) {
          this.options.push({
            key: i,
            value: i,
            text:
              i + ": " + this.midiSounds.player.loader.instrumentInfo(i).title,
          });
        }
      }
      return this.options;
    }
  }

  initKeyboardCapture() {
    const keyToNote = {
      z: 48,
      s: 49,
      x: 50,
      d: 51,
      c: 52,
      v: 53,
      g: 54,
      b: 55,
      h: 56,
      n: 57,
      j: 58,
      m: 59,
      ",": 60,
      l: 61,
      ".": 62,
      ";": 63,
      "/": 64,
      q: 65 - 5,
      2: 66 - 5,
      w: 67 - 5,
      3: 68 - 5,
      e: 69 - 5,
      r: 70 - 5,
      5: 71 - 5,
      t: 72 - 5,
      6: 73 - 5,
      y: 74 - 5,
      7: 75 - 5,
      u: 76 - 5,
      i: 77 - 5,
      9: 78 - 5,
      o: 79 - 5,
      0: 80 - 5,
      p: 81 - 5,
      "[": 82 - 5,
      "=": 83 - 5,
      "]": 84 - 5,
      "\\": 86 - 5,
    };
    const component = this;
    document.addEventListener("keydown", function (e) {
      switch (e.key) {
        case "z":
        case "s":
        case "x":
        case "d":
        case "c":
        case "v":
        case "g":
        case "b":
        case "h":
        case "n":
        case "j":
        case "m":
        case "l":
        case ",":
        case ".":
        case "/":
        case ";":
        case "q":
        case "2":
        case "w":
        case "3":
        case "e":
        case "r":
        case "5":
        case "t":
        case "6":
        case "y":
        case "7":
        case "u":
        case "i":
        case "9":
        case "o":
        case "0":
        case "p":
        case "[":
        case "=":
        case "]":
        case "\\":
          //   e.preventDefault();
          component.keyDown(keyToNote[e.key]);
          break;
        default:
      }
    });

    document.addEventListener("keyup", function (e) {
      switch (e.key) {
        case "z":
        case "s":
        case "x":
        case "d":
        case "c":
        case "v":
        case "g":
        case "b":
        case "h":
        case "n":
        case "j":
        case "m":
        case "l":
        case ",":
        case ".":
        case "/":
        case ";":
        case "q":
        case "2":
        case "w":
        case "3":
        case "e":
        case "r":
        case "5":
        case "t":
        case "6":
        case "y":
        case "7":
        case "u":
        case "i":
        case "9":
        case "o":
        case "0":
        case "p":
        case "[":
        case "=":
        case "]":
        case "\\":
          component.keyUp(keyToNote[e.key]);
          break;
        default:
      }
    });
  }

  keyDown(n, v) {
    this.keyUp(n);
    var volume = 1;
    if (v) {
      volume = v;
    }
    this.envelopes[n] = this.midiSounds.player.queueWaveTable(
      this.midiSounds.audioContext,
      this.midiSounds.equalizer.input,
      window[
        this.midiSounds.player.loader.instrumentInfo(
          this.state.selectedInstrument
        ).variable
      ],
      0,
      n,
      9999,
      volume
    );
    this.flashMessage();
    this.setState(this.state);
  }
  keyUp(n) {
    if (this.envelopes) {
      if (this.envelopes[n]) {
        this.envelopes[n].cancel();
        this.envelopes[n] = null;
        this.setState(this.state);
      }
    }
  }
  pressed(n) {
    if (this.envelopes) {
      if (this.envelopes[n]) {
        return true;
      }
    }
    return false;
  }
  midiOnMIDImessage(event) {
    var data = event.data;
    var cmd = data[0] >> 4;
    var channel = data[0] & 0xf;
    var type = data[0] & 0xf0;
    var pitch = data[1];
    var velocity = data[2];
    switch (type) {
      case 0x90:
        this.keyDown(pitch, velocity / 127);
        break;
      case 0x80:
        this.keyUp(pitch);
        break;
      default:
        console.log(type, channel, cmd, pitch);
    }
  }
  onMIDIOnStateChange(event) {
    this.setState({
      status:
        event.port.manufacturer +
        " " +
        event.port.name +
        " " +
        event.port.state,
    });
  }
  requestMIDIAccessSuccess(midi) {
    var inputs = midi.inputs.values();
    for (
      var input = inputs.next();
      input && !input.done;
      input = inputs.next()
    ) {
      input.value.onmidimessage = this.midiOnMIDImessage.bind(this);
    }
    midi.onstatechange = this.onMIDIOnStateChange.bind(this);
  }
  requestMIDIAccessFailure(e) {
    this.setState({ status: "MIDI Access Failure" });
  }
  startListening() {
    this.setState({ status: "waiting" });
    if (navigator.requestMIDIAccess) {
      navigator
        .requestMIDIAccess()
        .then(
          this.requestMIDIAccessSuccess.bind(this),
          this.requestMIDIAccessFailure.bind(this)
        );
    } else {
      this.setState({ status: "navigator.requestMIDIAccess undefined" });
    }
  }
  flashMessage() {
    const colors = [
      "green",
      "red",
      "orange",
      "pink",
      "aqua",
      "blue",
      "aquamarine",
      "purple",
    ];
    let color = colors[Math.floor(Math.random() * colors.length)];
    let newClassName = color + "-changing";
    document.querySelector(".piano-message").className = "piano-message";
    window.requestAnimationFrame(function (time) {
      window.requestAnimationFrame(function (time) {
        document.querySelector(".piano-message").className =
          "piano-message " + newClassName;
      });
    });
  }
  render() {
    return (
      <div className="piano">
        <div className="piano-intro">
          Select any instrument - find your favorite!
        </div>
        <p>
          <select
            value={this.state.selectedInstrument}
            onChange={this.onSelectInstrument.bind(this)}
            id="InstrumentSelect"
          >
            {this.createSelectItems()}
          </select>
        </p>
        <p className="piano-message">
          Click the Piano, press your keyboard, or play a MIDI instrument
        </p>
        <p>{this.state.status}</p>
        <table align="center">
          <tbody>
            <tr>
              <td style={STYLE.keyMargin}></td>

              <td
                style={
                  this.pressed(1 + 12 * (2 + 1))
                    ? STYLE.keyBlackPress
                    : STYLE.keyBlack
                }
                onMouseDown={(e) => this.keyDown(1 + 12 * (2 + 1))}
                onMouseUp={(e) => this.keyUp(1 + 12 * (2 + 1))}
                onMouseOut={(e) => this.keyUp(1 + 12 * (2 + 1))}
              ></td>
              <td
                style={
                  this.pressed(3 + 12 * (2 + 1))
                    ? STYLE.keyBlackPress
                    : STYLE.keyBlack
                }
                onMouseDown={(e) => this.keyDown(3 + 12 * (2 + 1))}
                onMouseUp={(e) => this.keyUp(3 + 12 * (2 + 1))}
                onMouseOut={(e) => this.keyUp(3 + 12 * (2 + 1))}
              ></td>
              <td style={STYLE.keyNo}></td>
              <td
                style={
                  this.pressed(6 + 12 * (2 + 1))
                    ? STYLE.keyBlackPress
                    : STYLE.keyBlack
                }
                onMouseDown={(e) => this.keyDown(6 + 12 * (2 + 1))}
                onMouseUp={(e) => this.keyUp(6 + 12 * (2 + 1))}
                onMouseOut={(e) => this.keyUp(6 + 12 * (2 + 1))}
              ></td>
              <td
                style={
                  this.pressed(8 + 12 * (2 + 1))
                    ? STYLE.keyBlackPress
                    : STYLE.keyBlack
                }
                onMouseDown={(e) => this.keyDown(8 + 12 * (2 + 1))}
                onMouseUp={(e) => this.keyUp(8 + 12 * (2 + 1))}
                onMouseOut={(e) => this.keyUp(8 + 12 * (2 + 1))}
              ></td>
              <td
                style={
                  this.pressed(10 + 12 * (2 + 1))
                    ? STYLE.keyBlackPress
                    : STYLE.keyBlack
                }
                onMouseDown={(e) => this.keyDown(10 + 12 * (2 + 1))}
                onMouseUp={(e) => this.keyUp(10 + 12 * (2 + 1))}
                onMouseOut={(e) => this.keyUp(10 + 12 * (2 + 1))}
              ></td>
              <td style={STYLE.keyNo}></td>

              <td
                style={
                  this.pressed(1 + 12 * (3 + 1))
                    ? STYLE.keyBlackPress
                    : STYLE.keyBlack
                }
                onMouseDown={(e) => this.keyDown(1 + 12 * (3 + 1))}
                onMouseUp={(e) => this.keyUp(1 + 12 * (3 + 1))}
                onMouseOut={(e) => this.keyUp(1 + 12 * (3 + 1))}
              ></td>
              <td
                style={
                  this.pressed(3 + 12 * (3 + 1))
                    ? STYLE.keyBlackPress
                    : STYLE.keyBlack
                }
                onMouseDown={(e) => this.keyDown(3 + 12 * (3 + 1))}
                onMouseUp={(e) => this.keyUp(3 + 12 * (3 + 1))}
                onMouseOut={(e) => this.keyUp(3 + 12 * (3 + 1))}
              ></td>
              <td style={STYLE.keyNo}></td>
              <td
                style={
                  this.pressed(6 + 12 * (3 + 1))
                    ? STYLE.keyBlackPress
                    : STYLE.keyBlack
                }
                onMouseDown={(e) => this.keyDown(6 + 12 * (3 + 1))}
                onMouseUp={(e) => this.keyUp(6 + 12 * (3 + 1))}
                onMouseOut={(e) => this.keyUp(6 + 12 * (3 + 1))}
              ></td>
              <td
                style={
                  this.pressed(8 + 12 * (3 + 1))
                    ? STYLE.keyBlackPress
                    : STYLE.keyBlack
                }
                onMouseDown={(e) => this.keyDown(8 + 12 * (3 + 1))}
                onMouseUp={(e) => this.keyUp(8 + 12 * (3 + 1))}
                onMouseOut={(e) => this.keyUp(8 + 12 * (3 + 1))}
              ></td>
              <td
                style={
                  this.pressed(10 + 12 * (3 + 1))
                    ? STYLE.keyBlackPress
                    : STYLE.keyBlack
                }
                onMouseDown={(e) => this.keyDown(10 + 12 * (3 + 1))}
                onMouseUp={(e) => this.keyUp(10 + 12 * (3 + 1))}
                onMouseOut={(e) => this.keyUp(10 + 12 * (3 + 1))}
              ></td>
              <td style={STYLE.keyNo}></td>

              <td
                style={
                  this.pressed(1 + 12 * (4 + 1))
                    ? STYLE.keyBlackPress
                    : STYLE.keyBlack
                }
                onMouseDown={(e) => this.keyDown(1 + 12 * (4 + 1))}
                onMouseUp={(e) => this.keyUp(1 + 12 * (4 + 1))}
                onMouseOut={(e) => this.keyUp(1 + 12 * (4 + 1))}
              ></td>
              <td
                style={
                  this.pressed(3 + 12 * (4 + 1))
                    ? STYLE.keyBlackPress
                    : STYLE.keyBlack
                }
                onMouseDown={(e) => this.keyDown(3 + 12 * (4 + 1))}
                onMouseUp={(e) => this.keyUp(3 + 12 * (4 + 1))}
                onMouseOut={(e) => this.keyUp(3 + 12 * (4 + 1))}
              ></td>
              <td style={STYLE.keyNo}></td>
              <td
                style={
                  this.pressed(6 + 12 * (4 + 1))
                    ? STYLE.keyBlackPress
                    : STYLE.keyBlack
                }
                onMouseDown={(e) => this.keyDown(6 + 12 * (4 + 1))}
                onMouseUp={(e) => this.keyUp(6 + 12 * (4 + 1))}
                onMouseOut={(e) => this.keyUp(6 + 12 * (4 + 1))}
              ></td>
              <td
                style={
                  this.pressed(8 + 12 * (4 + 1))
                    ? STYLE.keyBlackPress
                    : STYLE.keyBlack
                }
                onMouseDown={(e) => this.keyDown(8 + 12 * (4 + 1))}
                onMouseUp={(e) => this.keyUp(8 + 12 * (4 + 1))}
                onMouseOut={(e) => this.keyUp(8 + 12 * (4 + 1))}
              ></td>
              <td
                style={
                  this.pressed(10 + 12 * (4 + 1))
                    ? STYLE.keyBlackPress
                    : STYLE.keyBlack
                }
                onMouseDown={(e) => this.keyDown(10 + 12 * (4 + 1))}
                onMouseUp={(e) => this.keyUp(10 + 12 * (4 + 1))}
                onMouseOut={(e) => this.keyUp(10 + 12 * (4 + 1))}
              ></td>
              <td style={STYLE.keyNo}></td>

              <td
                style={
                  this.pressed(1 + 12 * (5 + 1))
                    ? STYLE.keyBlackPress
                    : STYLE.keyBlack
                }
                onMouseDown={(e) => this.keyDown(1 + 12 * (5 + 1))}
                onMouseUp={(e) => this.keyUp(1 + 12 * (5 + 1))}
                onMouseOut={(e) => this.keyUp(1 + 12 * (5 + 1))}
              ></td>
              <td
                style={
                  this.pressed(3 + 12 * (5 + 1))
                    ? STYLE.keyBlackPress
                    : STYLE.keyBlack
                }
                onMouseDown={(e) => this.keyDown(3 + 12 * (5 + 1))}
                onMouseUp={(e) => this.keyUp(3 + 12 * (5 + 1))}
                onMouseOut={(e) => this.keyUp(3 + 12 * (5 + 1))}
              ></td>
              <td style={STYLE.keyNo}></td>
              <td
                style={
                  this.pressed(6 + 12 * (5 + 1))
                    ? STYLE.keyBlackPress
                    : STYLE.keyBlack
                }
                onMouseDown={(e) => this.keyDown(6 + 12 * (5 + 1))}
                onMouseUp={(e) => this.keyUp(6 + 12 * (5 + 1))}
                onMouseOut={(e) => this.keyUp(6 + 12 * (5 + 1))}
              ></td>
              <td
                style={
                  this.pressed(8 + 12 * (5 + 1))
                    ? STYLE.keyBlackPress
                    : STYLE.keyBlack
                }
                onMouseDown={(e) => this.keyDown(8 + 12 * (5 + 1))}
                onMouseUp={(e) => this.keyUp(8 + 12 * (5 + 1))}
                onMouseOut={(e) => this.keyUp(8 + 12 * (5 + 1))}
              ></td>
              <td
                style={
                  this.pressed(10 + 12 * (5 + 1))
                    ? STYLE.keyBlackPress
                    : STYLE.keyBlack
                }
                onMouseDown={(e) => this.keyDown(10 + 12 * (5 + 1))}
                onMouseUp={(e) => this.keyUp(10 + 12 * (5 + 1))}
                onMouseOut={(e) => this.keyUp(10 + 12 * (5 + 1))}
              ></td>
              <td style={STYLE.keyNo}></td>
            </tr>
          </tbody>
        </table>
        <table align="center">
          <tbody>
            <tr>
              <td
                style={
                  this.pressed(0 + 12 * (2 + 1))
                    ? STYLE.keyWhitePress
                    : STYLE.keyWhite
                }
                onMouseDown={(e) => this.keyDown(0 + 12 * (2 + 1))}
                onMouseUp={(e) => this.keyUp(0 + 12 * (2 + 1))}
                onMouseOut={(e) => this.keyUp(0 + 12 * (2 + 1))}
              ></td>
              <td
                style={
                  this.pressed(2 + 12 * (2 + 1))
                    ? STYLE.keyWhitePress
                    : STYLE.keyWhite
                }
                onMouseDown={(e) => this.keyDown(2 + 12 * (2 + 1))}
                onMouseUp={(e) => this.keyUp(2 + 12 * (2 + 1))}
                onMouseOut={(e) => this.keyUp(2 + 12 * (2 + 1))}
              ></td>
              <td
                style={
                  this.pressed(4 + 12 * (2 + 1))
                    ? STYLE.keyWhitePress
                    : STYLE.keyWhite
                }
                onMouseDown={(e) => this.keyDown(4 + 12 * (2 + 1))}
                onMouseUp={(e) => this.keyUp(4 + 12 * (2 + 1))}
                onMouseOut={(e) => this.keyUp(4 + 12 * (2 + 1))}
              ></td>
              <td
                style={
                  this.pressed(5 + 12 * (2 + 1))
                    ? STYLE.keyWhitePress
                    : STYLE.keyWhite
                }
                onMouseDown={(e) => this.keyDown(5 + 12 * (2 + 1))}
                onMouseUp={(e) => this.keyUp(5 + 12 * (2 + 1))}
                onMouseOut={(e) => this.keyUp(5 + 12 * (2 + 1))}
              ></td>
              <td
                style={
                  this.pressed(7 + 12 * (2 + 1))
                    ? STYLE.keyWhitePress
                    : STYLE.keyWhite
                }
                onMouseDown={(e) => this.keyDown(7 + 12 * (2 + 1))}
                onMouseUp={(e) => this.keyUp(7 + 12 * (2 + 1))}
                onMouseOut={(e) => this.keyUp(7 + 12 * (2 + 1))}
              ></td>
              <td
                style={
                  this.pressed(9 + 12 * (2 + 1))
                    ? STYLE.keyWhitePress
                    : STYLE.keyWhite
                }
                onMouseDown={(e) => this.keyDown(9 + 12 * (2 + 1))}
                onMouseUp={(e) => this.keyUp(9 + 12 * (2 + 1))}
                onMouseOut={(e) => this.keyUp(9 + 12 * (2 + 1))}
              ></td>
              <td
                style={
                  this.pressed(11 + 12 * (2 + 1))
                    ? STYLE.keyWhitePress
                    : STYLE.keyWhite
                }
                onMouseDown={(e) => this.keyDown(11 + 12 * (2 + 1))}
                onMouseUp={(e) => this.keyUp(11 + 12 * (2 + 1))}
                onMouseOut={(e) => this.keyUp(11 + 12 * (2 + 1))}
              ></td>

              <td
                style={
                  this.pressed(0 + 12 * (3 + 1))
                    ? STYLE.keyWhitePress
                    : STYLE.keyWhite
                }
                onMouseDown={(e) => this.keyDown(0 + 12 * (3 + 1))}
                onMouseUp={(e) => this.keyUp(0 + 12 * (3 + 1))}
                onMouseOut={(e) => this.keyUp(0 + 12 * (3 + 1))}
              ></td>
              <td
                style={
                  this.pressed(2 + 12 * (3 + 1))
                    ? STYLE.keyWhitePress
                    : STYLE.keyWhite
                }
                onMouseDown={(e) => this.keyDown(2 + 12 * (3 + 1))}
                onMouseUp={(e) => this.keyUp(2 + 12 * (3 + 1))}
                onMouseOut={(e) => this.keyUp(2 + 12 * (3 + 1))}
              ></td>
              <td
                style={
                  this.pressed(4 + 12 * (3 + 1))
                    ? STYLE.keyWhitePress
                    : STYLE.keyWhite
                }
                onMouseDown={(e) => this.keyDown(4 + 12 * (3 + 1))}
                onMouseUp={(e) => this.keyUp(4 + 12 * (3 + 1))}
                onMouseOut={(e) => this.keyUp(4 + 12 * (3 + 1))}
              ></td>
              <td
                style={
                  this.pressed(5 + 12 * (3 + 1))
                    ? STYLE.keyWhitePress
                    : STYLE.keyWhite
                }
                onMouseDown={(e) => this.keyDown(5 + 12 * (3 + 1))}
                onMouseUp={(e) => this.keyUp(5 + 12 * (3 + 1))}
                onMouseOut={(e) => this.keyUp(5 + 12 * (3 + 1))}
              ></td>
              <td
                style={
                  this.pressed(7 + 12 * (3 + 1))
                    ? STYLE.keyWhitePress
                    : STYLE.keyWhite
                }
                onMouseDown={(e) => this.keyDown(7 + 12 * (3 + 1))}
                onMouseUp={(e) => this.keyUp(7 + 12 * (3 + 1))}
                onMouseOut={(e) => this.keyUp(7 + 12 * (3 + 1))}
              ></td>
              <td
                style={
                  this.pressed(9 + 12 * (3 + 1))
                    ? STYLE.keyWhitePress
                    : STYLE.keyWhite
                }
                onMouseDown={(e) => this.keyDown(9 + 12 * (3 + 1))}
                onMouseUp={(e) => this.keyUp(9 + 12 * (3 + 1))}
                onMouseOut={(e) => this.keyUp(9 + 12 * (3 + 1))}
              ></td>
              <td
                style={
                  this.pressed(11 + 12 * (3 + 1))
                    ? STYLE.keyWhitePress
                    : STYLE.keyWhite
                }
                onMouseDown={(e) => this.keyDown(11 + 12 * (3 + 1))}
                onMouseUp={(e) => this.keyUp(11 + 12 * (3 + 1))}
                onMouseOut={(e) => this.keyUp(11 + 12 * (3 + 1))}
              ></td>

              <td
                style={
                  this.pressed(0 + 12 * (4 + 1))
                    ? STYLE.keyWhitePress
                    : STYLE.keyWhite
                }
                onMouseDown={(e) => this.keyDown(0 + 12 * (4 + 1))}
                onMouseUp={(e) => this.keyUp(0 + 12 * (4 + 1))}
                onMouseOut={(e) => this.keyUp(0 + 12 * (4 + 1))}
              ></td>
              <td
                style={
                  this.pressed(2 + 12 * (4 + 1))
                    ? STYLE.keyWhitePress
                    : STYLE.keyWhite
                }
                onMouseDown={(e) => this.keyDown(2 + 12 * (4 + 1))}
                onMouseUp={(e) => this.keyUp(2 + 12 * (4 + 1))}
                onMouseOut={(e) => this.keyUp(2 + 12 * (4 + 1))}
              ></td>
              <td
                style={
                  this.pressed(4 + 12 * (4 + 1))
                    ? STYLE.keyWhitePress
                    : STYLE.keyWhite
                }
                onMouseDown={(e) => this.keyDown(4 + 12 * (4 + 1))}
                onMouseUp={(e) => this.keyUp(4 + 12 * (4 + 1))}
                onMouseOut={(e) => this.keyUp(4 + 12 * (4 + 1))}
              ></td>
              <td
                style={
                  this.pressed(5 + 12 * (4 + 1))
                    ? STYLE.keyWhitePress
                    : STYLE.keyWhite
                }
                onMouseDown={(e) => this.keyDown(5 + 12 * (4 + 1))}
                onMouseUp={(e) => this.keyUp(5 + 12 * (4 + 1))}
                onMouseOut={(e) => this.keyUp(5 + 12 * (4 + 1))}
              ></td>
              <td
                style={
                  this.pressed(7 + 12 * (4 + 1))
                    ? STYLE.keyWhitePress
                    : STYLE.keyWhite
                }
                onMouseDown={(e) => this.keyDown(7 + 12 * (4 + 1))}
                onMouseUp={(e) => this.keyUp(7 + 12 * (4 + 1))}
                onMouseOut={(e) => this.keyUp(7 + 12 * (4 + 1))}
              ></td>
              <td
                style={
                  this.pressed(9 + 12 * (4 + 1))
                    ? STYLE.keyWhitePress
                    : STYLE.keyWhite
                }
                onMouseDown={(e) => this.keyDown(9 + 12 * (4 + 1))}
                onMouseUp={(e) => this.keyUp(9 + 12 * (4 + 1))}
                onMouseOut={(e) => this.keyUp(9 + 12 * (4 + 1))}
              ></td>
              <td
                style={
                  this.pressed(11 + 12 * (4 + 1))
                    ? STYLE.keyWhitePress
                    : STYLE.keyWhite
                }
                onMouseDown={(e) => this.keyDown(11 + 12 * (4 + 1))}
                onMouseUp={(e) => this.keyUp(11 + 12 * (4 + 1))}
                onMouseOut={(e) => this.keyUp(11 + 12 * (4 + 1))}
              ></td>

              <td
                style={
                  this.pressed(0 + 12 * (5 + 1))
                    ? STYLE.keyWhitePress
                    : STYLE.keyWhite
                }
                onMouseDown={(e) => this.keyDown(0 + 12 * (5 + 1))}
                onMouseUp={(e) => this.keyUp(0 + 12 * (5 + 1))}
                onMouseOut={(e) => this.keyUp(0 + 12 * (5 + 1))}
              ></td>
              <td
                style={
                  this.pressed(2 + 12 * (5 + 1))
                    ? STYLE.keyWhitePress
                    : STYLE.keyWhite
                }
                onMouseDown={(e) => this.keyDown(2 + 12 * (5 + 1))}
                onMouseUp={(e) => this.keyUp(2 + 12 * (5 + 1))}
                onMouseOut={(e) => this.keyUp(2 + 12 * (5 + 1))}
              ></td>
              <td
                style={
                  this.pressed(4 + 12 * (5 + 1))
                    ? STYLE.keyWhitePress
                    : STYLE.keyWhite
                }
                onMouseDown={(e) => this.keyDown(4 + 12 * (5 + 1))}
                onMouseUp={(e) => this.keyUp(4 + 12 * (5 + 1))}
                onMouseOut={(e) => this.keyUp(4 + 12 * (5 + 1))}
              ></td>
              <td
                style={
                  this.pressed(5 + 12 * (5 + 1))
                    ? STYLE.keyWhitePress
                    : STYLE.keyWhite
                }
                onMouseDown={(e) => this.keyDown(5 + 12 * (5 + 1))}
                onMouseUp={(e) => this.keyUp(5 + 12 * (5 + 1))}
                onMouseOut={(e) => this.keyUp(5 + 12 * (5 + 1))}
              ></td>
              <td
                style={
                  this.pressed(7 + 12 * (5 + 1))
                    ? STYLE.keyWhitePress
                    : STYLE.keyWhite
                }
                onMouseDown={(e) => this.keyDown(7 + 12 * (5 + 1))}
                onMouseUp={(e) => this.keyUp(7 + 12 * (5 + 1))}
                onMouseOut={(e) => this.keyUp(7 + 12 * (5 + 1))}
              ></td>
              <td
                style={
                  this.pressed(9 + 12 * (5 + 1))
                    ? STYLE.keyWhitePress
                    : STYLE.keyWhite
                }
                onMouseDown={(e) => this.keyDown(9 + 12 * (5 + 1))}
                onMouseUp={(e) => this.keyUp(9 + 12 * (5 + 1))}
                onMouseOut={(e) => this.keyUp(9 + 12 * (5 + 1))}
              ></td>
              <td
                style={
                  this.pressed(11 + 12 * (5 + 1))
                    ? STYLE.keyWhitePress
                    : STYLE.keyWhite
                }
                onMouseDown={(e) => this.keyDown(11 + 12 * (5 + 1))}
                onMouseUp={(e) => this.keyUp(11 + 12 * (5 + 1))}
                onMouseOut={(e) => this.keyUp(11 + 12 * (5 + 1))}
              ></td>

              <td style={STYLE.keyMargin}></td>
            </tr>
          </tbody>
        </table>
        <div className="hide">
          <MIDISounds
            ref={(ref) => (this.midiSounds = ref)}
            PianoExampleElementName="root"
            instruments={[this.state.selectedInstrument]}
          />
        </div>
      </div>
    );
  }
}

export default PianoExample;
