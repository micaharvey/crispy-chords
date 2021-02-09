import React, { Component } from "react";
import MIDISounds from "midi-sounds-react";
import "../styles/Sequencer.css";

class Sequencer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drumSnare: 15,
      drumBass: 5,
      drumHiHat: 35,
      drumClap: 24,
      tracks: [
        [
          true,
          false,
          false,
          false,
          false,
          false,
          false,
          true,
          true,
          false,
          true,
          false,
          false,
          false,
          true,
          false,
        ],
        [
          false,
          false,
          false,
          false,
          true,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          true,
          false,
          false,
          false,
        ],
        [
          false,
          false,
          false,
          true,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
        ],
        [
          true,
          false,
          true,
          false,
          true,
          false,
          true,
          false,
          true,
          false,
          true,
          false,
          true,
          false,
          true,
          false,
        ],
      ],
    };
    this.state.data = [];
    this.beats = [];
  }
  componentDidMount() {
    this.setState({ initialized: true });
    this.setEchoVolume();
  }
  setEchoVolume() {
    if (this.midiSounds) {
      this.midiSounds.setEchoLevel(0);
      this.midiSounds.setMasterVolume(0.3);
    }
  }
  onSelectDrumSnare(e) {
    var list = e.target;
    var n = list.options[list.selectedIndex].getAttribute("value");
    this.midiSounds.cacheDrum(n);
    var me = this;
    this.midiSounds.player.loader.waitLoad(function () {
      me.setState({
        drumSnare: n,
      });
      me.fillBeat();
    });
  }
  onSelectDrumBass(e) {
    var list = e.target;
    var n = list.options[list.selectedIndex].getAttribute("value");
    this.midiSounds.cacheDrum(n);
    var me = this;
    this.midiSounds.player.loader.waitLoad(function () {
      me.setState({
        drumBass: n,
      });
      me.fillBeat();
    });
  }
  onSelectDrumHiHat(e) {
    var list = e.target;
    var n = list.options[list.selectedIndex].getAttribute("value");
    this.midiSounds.cacheDrum(n);
    var me = this;
    this.midiSounds.player.loader.waitLoad(function () {
      me.setState({
        drumHiHat: n,
      });
      me.fillBeat();
    });
  }
  onSelectDrumClap(e) {
    var list = e.target;
    var n = list.options[list.selectedIndex].getAttribute("value");
    this.midiSounds.cacheDrum(n);
    var me = this;
    this.midiSounds.player.loader.waitLoad(function () {
      me.setState({
        drumClap: n,
      });
      me.fillBeat();
    });
  }
  createSelectItems() {
    if (this.midiSounds) {
      if (!this.items) {
        this.items = [];
        for (
          let i = 0;
          i < this.midiSounds.player.loader.drumKeys().length;
          i++
        ) {
          this.items.push(
            <option key={i} value={i}>
              {"" +
                (i + 0) +
                ". " +
                this.midiSounds.player.loader.drumInfo(i).title}
            </option>
          );
        }
      }
      return this.items;
    }
  }
  fillBeat() {
    for (var i = 0; i < 16; i++) {
      var drums = [];
      if (this.state.tracks[0][i]) {
        drums.push(this.state.drumBass);
      }
      if (this.state.tracks[1][i]) {
        drums.push(this.state.drumSnare);
      }
      if (this.state.tracks[2][i]) {
        drums.push(this.state.drumClap);
      }
      if (this.state.tracks[3][i]) {
        drums.push(this.state.drumHiHat);
      }
      var beat = [drums, []];
      this.beats[i] = beat;
    }
  }
  playLoop() {
    this.fillBeat();
    this.midiSounds.startPlayLoop(this.beats, 120, 1 / 16);
  }
  stopLoop() {
    this.midiSounds.stopPlayLoop();
  }
  toggleDrum(track, step) {
    var a = this.state.tracks;
    a[track][step] = !a[track][step];
    this.setState({ tracks: a });
    this.fillBeat();
  }
  render() {
    return (
      <div className="sequencer">
        <div className="sequencer-intro">Define yourself</div>
        <table id="SequencerTable" align="center">
          <tbody>
            <tr>
              <td>
                <select
                  value={this.state.drumBass}
                  onChange={this.onSelectDrumBass.bind(this)}
                >
                  {this.createSelectItems()}
                </select>
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[0][0]}
                  onChange={(e) => this.toggleDrum(0, 0)}
                  id="test0"
                />
                <label for="test0" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[0][1]}
                  onChange={(e) => this.toggleDrum(0, 1)}
                  id="test1"
                />
                <label for="test1" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[0][2]}
                  onChange={(e) => this.toggleDrum(0, 2)}
                  id="test2"
                />
                <label for="test2" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[0][3]}
                  onChange={(e) => this.toggleDrum(0, 3)}
                  id="test3"
                />
                <label for="test3" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[0][4]}
                  onChange={(e) => this.toggleDrum(0, 4)}
                  id="test4"
                />
                <label for="test4" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[0][5]}
                  onChange={(e) => this.toggleDrum(0, 5)}
                  id="test5"
                />
                <label for="test5" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[0][6]}
                  onChange={(e) => this.toggleDrum(0, 6)}
                  id="test6"
                />
                <label for="test6" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[0][7]}
                  onChange={(e) => this.toggleDrum(0, 7)}
                  id="test7"
                />
                <label for="test7" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[0][8]}
                  onChange={(e) => this.toggleDrum(0, 8)}
                  id="test8"
                />
                <label for="test8" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[0][9]}
                  onChange={(e) => this.toggleDrum(0, 9)}
                  id="test9"
                />
                <label for="test9" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[0][10]}
                  onChange={(e) => this.toggleDrum(0, 10)}
                  id="test10"
                />
                <label for="test10" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[0][11]}
                  onChange={(e) => this.toggleDrum(0, 11)}
                  id="test11"
                />
                <label for="test11" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[0][12]}
                  onChange={(e) => this.toggleDrum(0, 12)}
                  id="test12"
                />
                <label for="test12" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[0][13]}
                  onChange={(e) => this.toggleDrum(0, 13)}
                  id="test13"
                />
                <label for="test13" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[0][14]}
                  onChange={(e) => this.toggleDrum(0, 14)}
                  id="test14"
                />
                <label for="test14" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[0][15]}
                  onChange={(e) => this.toggleDrum(0, 15)}
                  id="test15"
                />
                <label for="test15" aria-describedby="label" />
              </td>
            </tr>
            <tr>
              <td>
                <select
                  value={this.state.drumSnare}
                  onChange={this.onSelectDrumSnare.bind(this)}
                >
                  {this.createSelectItems()}
                </select>
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[1][0]}
                  onChange={(e) => this.toggleDrum(1, 0)}
                  id="tes1t0"
                />
                <label for="tes1t0" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[1][1]}
                  onChange={(e) => this.toggleDrum(1, 1)}
                  id="tes1t1"
                />
                <label for="tes1t1" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[1][2]}
                  onChange={(e) => this.toggleDrum(1, 2)}
                  id="tes1t2"
                />
                <label for="tes1t2" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[1][3]}
                  onChange={(e) => this.toggleDrum(1, 3)}
                  id="tes1t3"
                />
                <label for="tes1t3" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[1][4]}
                  onChange={(e) => this.toggleDrum(1, 4)}
                  id="tes1t4"
                />
                <label for="tes1t4" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[1][5]}
                  onChange={(e) => this.toggleDrum(1, 5)}
                  id="tes1t5"
                />
                <label for="tes1t5" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[1][6]}
                  onChange={(e) => this.toggleDrum(1, 6)}
                  id="tes1t6"
                />
                <label for="tes1t6" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[1][7]}
                  onChange={(e) => this.toggleDrum(1, 7)}
                  id="tes1t7"
                />
                <label for="tes1t7" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[1][8]}
                  onChange={(e) => this.toggleDrum(1, 8)}
                  id="tes1t8"
                />
                <label for="tes1t8" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[1][9]}
                  onChange={(e) => this.toggleDrum(1, 9)}
                  id="tes1t9"
                />
                <label for="tes1t9" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[1][10]}
                  onChange={(e) => this.toggleDrum(1, 10)}
                  id="test110"
                />
                <label for="test110" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[1][11]}
                  onChange={(e) => this.toggleDrum(1, 11)}
                  id="test111"
                />
                <label for="test111" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[1][12]}
                  onChange={(e) => this.toggleDrum(1, 12)}
                  id="test112"
                />
                <label for="test112" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[1][13]}
                  onChange={(e) => this.toggleDrum(1, 13)}
                  id="test113"
                />
                <label for="test113" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[1][14]}
                  onChange={(e) => this.toggleDrum(1, 14)}
                  id="test114"
                />
                <label for="test114" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[1][15]}
                  onChange={(e) => this.toggleDrum(1, 15)}
                  id="test115"
                />
                <label for="test115" aria-describedby="label" />
              </td>
            </tr>
            <tr>
              <td>
                <select
                  value={this.state.drumClap}
                  onChange={this.onSelectDrumClap.bind(this)}
                >
                  {this.createSelectItems()}
                </select>
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[2][0]}
                  onChange={(e) => this.toggleDrum(2, 0)}
                  id="tes2t0"
                />
                <label for="tes2t0" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[2][1]}
                  onChange={(e) => this.toggleDrum(2, 1)}
                  id="tes2t1"
                />
                <label for="tes2t1" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[2][2]}
                  onChange={(e) => this.toggleDrum(2, 2)}
                  id="tes2t2"
                />
                <label for="tes2t2" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[2][3]}
                  onChange={(e) => this.toggleDrum(2, 3)}
                  id="tes2t3"
                />
                <label for="tes2t3" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[2][4]}
                  onChange={(e) => this.toggleDrum(2, 4)}
                  id="tes2t4"
                />
                <label for="tes2t4" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[2][5]}
                  onChange={(e) => this.toggleDrum(2, 5)}
                  id="tes2t5"
                />
                <label for="tes2t5" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[2][6]}
                  onChange={(e) => this.toggleDrum(2, 6)}
                  id="tes2t6"
                />
                <label for="tes2t6" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[2][7]}
                  onChange={(e) => this.toggleDrum(2, 7)}
                  id="tes2t7"
                />
                <label for="tes2t7" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[2][8]}
                  onChange={(e) => this.toggleDrum(2, 8)}
                  id="tes2t8"
                />
                <label for="tes2t8" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[2][9]}
                  onChange={(e) => this.toggleDrum(2, 9)}
                  id="tes2t9"
                />
                <label for="tes2t9" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[2][10]}
                  onChange={(e) => this.toggleDrum(2, 10)}
                  id="test210"
                />
                <label for="test210" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[2][11]}
                  onChange={(e) => this.toggleDrum(2, 11)}
                  id="test211"
                />
                <label for="test211" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[2][12]}
                  onChange={(e) => this.toggleDrum(2, 12)}
                  id="test212"
                />
                <label for="test212" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[2][13]}
                  onChange={(e) => this.toggleDrum(2, 13)}
                  id="test213"
                />
                <label for="test213" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[2][14]}
                  onChange={(e) => this.toggleDrum(2, 14)}
                  id="test214"
                />
                <label for="test214" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[2][15]}
                  onChange={(e) => this.toggleDrum(2, 15)}
                  id="test215"
                />
                <label for="test215" aria-describedby="label" />
              </td>
            </tr>
            <tr>
              <td>
                <select
                  value={this.state.drumHiHat}
                  onChange={this.onSelectDrumHiHat.bind(this)}
                >
                  {this.createSelectItems()}
                </select>
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[3][0]}
                  onChange={(e) => this.toggleDrum(3, 0)}
                  id="tes3t0"
                />
                <label for="tes3t0" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[3][1]}
                  onChange={(e) => this.toggleDrum(3, 1)}
                  id="tes3t1"
                />
                <label for="tes3t1" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[3][2]}
                  onChange={(e) => this.toggleDrum(3, 2)}
                  id="tes3t2"
                />
                <label for="tes3t2" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[3][3]}
                  onChange={(e) => this.toggleDrum(3, 3)}
                  id="tes3t3"
                />
                <label for="tes3t3" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[3][4]}
                  onChange={(e) => this.toggleDrum(3, 4)}
                  id="tes3t4"
                />
                <label for="tes3t4" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[3][5]}
                  onChange={(e) => this.toggleDrum(3, 5)}
                  id="tes3t5"
                />
                <label for="tes3t5" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[3][6]}
                  onChange={(e) => this.toggleDrum(3, 6)}
                  id="tes3t6"
                />
                <label for="tes3t6" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[3][7]}
                  onChange={(e) => this.toggleDrum(3, 7)}
                  id="tes3t7"
                />
                <label for="tes3t7" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[3][8]}
                  onChange={(e) => this.toggleDrum(3, 8)}
                  id="tes3t8"
                />
                <label for="tes3t8" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[3][9]}
                  onChange={(e) => this.toggleDrum(3, 9)}
                  id="tes3t9"
                />
                <label for="tes3t9" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[3][10]}
                  onChange={(e) => this.toggleDrum(3, 10)}
                  id="test310"
                />
                <label for="test310" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[3][11]}
                  onChange={(e) => this.toggleDrum(3, 11)}
                  id="test311"
                />
                <label for="test311" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[3][12]}
                  onChange={(e) => this.toggleDrum(3, 12)}
                  id="test312"
                />
                <label for="test312" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[3][13]}
                  onChange={(e) => this.toggleDrum(3, 13)}
                  id="test313"
                />
                <label for="test313" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[3][14]}
                  onChange={(e) => this.toggleDrum(3, 14)}
                  id="test314"
                />
                <label for="test314" aria-describedby="label" />
              </td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={this.state.tracks[3][15]}
                  onChange={(e) => this.toggleDrum(3, 15)}
                  id="test315"
                />
                <label for="test315" aria-describedby="label" />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="sequencer-buttons">
          <button className="play-button" onClick={this.playLoop.bind(this)}>
            Play
          </button>

          <button className="stop-button" onClick={this.stopLoop.bind(this)}>
            Stop
          </button>
        </div>
        <div className="hide">
          <MIDISounds
            ref={(ref) => (this.midiSounds = ref)}
            appElementName="root"
            drums={[
              this.state.drumSnare,
              this.state.drumBass,
              this.state.drumHiHat,
              this.state.drumClap,
            ]}
          />
        </div>
      </div>
    );
  }
}

export default Sequencer;
