import React, { useState } from "react";
import Vex from "vexflow";

function Stave() {
  const [note, setNote] = useState("");

  const onLoad = () => {
    const vf = new Vex.Flow.Factory({
      renderer: { elementId: "boo", width: 500, height: 250 },
    });

    const score = vf.EasyScore();
    const system = vf.System();

    system
      .addStave({
        voices: [
          score.voice(
            score.notes("C#5/q, B4, A4, G#4", {
              stem: "up",
            })
          ),
          score.voice(score.notes("C#4/h, C#4", { stem: "down" })),
        ],
      })
      .addClef("treble")
      .addTimeSignature("4/4");

    system
      .addStave({
        voices: [
          score.voice(
            score.notes("C#3/q, B2, A2/8, B2, C#3, D3", {
              clef: "bass",
              stem: "up",
            })
          ),
          score.voice(
            score.notes("C#2/h, C#2", { clef: "bass", stem: "down" })
          ),
        ],
      })
      .addClef("bass")
      .addTimeSignature("4/4");

    system.addConnector();

    vf.draw();
  };

  return (
    <div className="Stave">
      <span style={{ color: "blue" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </span>
      <p onClick={() => onLoad()}>Stave</p>
      <span style={{ color: "blue" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </span>
      <span style={{ color: "blue" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </span>
      <div id="boo"></div>
    </div>
  );
}

export default Stave;
