import React, { useEffect } from "react";
import Vex from "vexflow";

function NeverGoingBack() {
  const init = () => {
    const VF = Vex.Flow;
    // Create an SVG renderer and attach it to the DIV element named "vexVerseElement".
    const div = document.getElementById("vexVerseElement");
    const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

    // Configure the rendering context.
    renderer.resize(2000, 275);
    let context = renderer.getContext();
    context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

    // Create a tab stave of width 250 at position 10, 0 on the canvas.
    var stave = new VF.TabStave(10, 0, 250);
    stave.addClef("tab").setContext(context).draw();

    var notes = [
      new VF.TabNote({
        positions: [{ str: 6, fret: 0 }],
        duration: "q",
      }),
      new VF.TabNote({
        positions: [
          { str: 4, fret: 2 },
          { str: 2, fret: 1 },
        ],
        duration: "q",
      }),
      new VF.TabNote({
        positions: [{ str: 5, fret: 0 }],
        duration: "q",
      }),
      new VF.TabNote({
        positions: [
          { str: 4, fret: 0 },
          { str: 2, fret: 0 },
        ],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [
          { str: 4, fret: 2 },
          { str: 2, fret: 1 },
        ],
        duration: "16",
      }),
    ];

    // render notes in svg
    VF.Formatter.FormatAndDraw(context, stave, notes);

    VF.TabTie.createHammeron({
      first_note: notes[3],
      last_note: notes[4],
      first_indices: [0],
      last_indices: [0],
    })
      .setContext(context)
      .draw();

    VF.TabTie.createHammeron({
      first_note: notes[3],
      last_note: notes[4],
      first_indices: [1],
      last_indices: [1],
    })
      .setContext(context)
      .draw();

    // Create a tab stave2 of width 250 at the end of the first stave, 0 on the canvas.
    var stave2 = new VF.TabStave(stave.width + stave.x, 0, 250);
    stave2.setContext(context).draw();

    var notes2 = [
      new VF.TabNote({
        positions: [{ str: 6, fret: 0 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 3, fret: 0 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [
          { str: 4, fret: 2 },
          { str: 1, fret: 3 },
        ],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 2, fret: 1 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [
          { str: 5, fret: 0 },
          { str: 3, fret: 0 },
        ],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 1, fret: 3 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [
          { str: 4, fret: 2 },
          { str: 2, fret: 1 },
        ],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 3, fret: 0 }],
        duration: "16",
      }),
    ];

    // render notes2 in svg
    VF.Formatter.FormatAndDraw(context, stave2, notes2);

    // Create a tab stave3 of width 250 at the end of the first stave, 0 on the canvas.
    var stave3 = new VF.TabStave(stave2.width + stave2.x, 0, 250);
    stave3.setContext(context).draw();

    var notes3 = [
      new VF.TabNote({
        positions: [{ str: 6, fret: 0 }],
        duration: "q",
      }),
      new VF.TabNote({
        positions: [
          { str: 4, fret: 2 },
          { str: 2, fret: 1 },
        ],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [
          { str: 4, fret: 0 },
          { str: 2, fret: 0 },
        ],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 5, fret: 0 }],
        duration: "q",
      }),
      new VF.TabNote({
        positions: [
          { str: 4, fret: 3 },
          { str: 2, fret: 3 },
        ],
        duration: "q",
      }),
    ];

    // render notes3 in svg
    VF.Formatter.FormatAndDraw(context, stave3, notes3);

    VF.TabTie.createPulloff({
      first_note: notes3[1],
      last_note: notes3[2],
      first_indices: [0],
      last_indices: [0],
    })
      .setContext(context)
      .draw();

    VF.TabTie.createPulloff({
      first_note: notes3[1],
      last_note: notes3[2],
      first_indices: [1],
      last_indices: [1],
    })
      .setContext(context)
      .draw();

    // Create a tab stave3 of width 250 at the end of the third stave, 0 on the canvas.
    var stave4 = new VF.TabStave(stave3.width + stave3.x, 0, 250);
    stave4.setContext(context).draw();

    var notes4 = [
      new VF.TabNote({
        positions: [
          { str: 6, fret: 0 },
          { str: 2, fret: 1 },
        ],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 3, fret: 0 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [
          { str: 4, fret: 2 },
          { str: 1, fret: 3 },
        ],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 2, fret: 1 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [
          { str: 5, fret: 0 },
          { str: 3, fret: 0 },
        ],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 1, fret: 3 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [
          { str: 4, fret: 2 },
          { str: 2, fret: 1 },
        ],
        duration: "q",
      }),
    ];

    // render notes4 in svg
    VF.Formatter.FormatAndDraw(context, stave4, notes4);

    /* Next line */
    /*-----------*/
    // Create a tab stave3 of width 250 at the end of the third stave, 0 on the canvas.
    var stave5 = new VF.TabStave(10, stave4.height + stave4.y, 250);
    stave5.addClef("tab").setContext(context).draw();

    var notes5 = [
      new VF.TabNote({
        positions: [
          { str: 5, fret: 0 },
          { str: 1, fret: 0 },
        ],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 2, fret: 3 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [
          { str: 4, fret: 3 },
          { str: 3, fret: 0 },
        ],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 1, fret: 0 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [
          { str: 5, fret: 0 },
          { str: 2, fret: 3 },
        ],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 3, fret: 0 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [
          { str: 4, fret: 2 },
          { str: 1, fret: 0 },
        ],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 2, fret: 3 }],
        duration: "16",
      }),
    ];

    // render notes5 in svg
    VF.Formatter.FormatAndDraw(context, stave5, notes5);

    var stave6 = new VF.TabStave(
      stave5.width + stave5.x,
      stave4.height + stave4.y,
      250
    );
    stave6.setContext(context).draw();

    var notes6 = [
      new VF.TabNote({
        positions: [
          { str: 5, fret: 0 },
          { str: 3, fret: 0 },
        ],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 1, fret: 0 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [
          { str: 4, fret: 3 },
          { str: 2, fret: 3 },
        ],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 3, fret: 0 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [
          { str: 5, fret: 0 },
          { str: 1, fret: 0 },
        ],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 2, fret: 3 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [
          { str: 4, fret: 3 },
          { str: 3, fret: 0 },
        ],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 1, fret: 0 }],
        duration: "16",
      }),
    ];

    // render notes6 in svg
    VF.Formatter.FormatAndDraw(context, stave6, notes6);

    // e|-------------|-----3---------|
    // B|-1-----3/5-3-|-1-----------1-|
    // G|---0---------|---------0-----|
    // D|-----2-3/5-3-|---2-------2---|
    // G|--------/0---|-------0-------|
    // C|-0-----------|-0-------------|

    var stave7 = new VF.TabStave(
      stave6.width + stave6.x,
      stave4.height + stave4.y,
      250
    );
    stave7.setContext(context).draw();

    var notes7 = [
      new VF.TabNote({
        positions: [
          { str: 6, fret: 0 },
          { str: 2, fret: 1 },
        ],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 3, fret: 0 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 4, fret: 2 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [
          { str: 2, fret: 3 },
          { str: 4, fret: 3 },
        ],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [
          { str: 2, fret: 5 },
          { str: 4, fret: 5 },
          { str: 5, fret: 0 },
        ],
        duration: "q",
      }),
      new VF.TabNote({
        positions: [
          { str: 4, fret: 3 },
          { str: 2, fret: 3 },
        ],
        duration: "q",
      }),
    ];

    // render notes7 in svg
    VF.Formatter.FormatAndDraw(context, stave7, notes7);

    var tie = new VF.TabSlide(
      {
        first_note: notes7[3],
        last_note: notes7[4],
        first_indices: [0],
        last_indices: [0],
      },
      VF.TabSlide.SLIDE_UP
    );

    tie.setContext(context);
    tie.draw();

    var tie2 = new VF.TabSlide(
      {
        first_note: notes7[3],
        last_note: notes7[4],
        first_indices: [1],
        last_indices: [1],
      },
      VF.TabSlide.SLIDE_UP
    );

    tie2.setContext(context);
    tie2.draw();

    var stave8 = new VF.TabStave(
      stave7.width + stave7.x,
      stave4.height + stave4.y,
      250
    );
    stave8.setContext(context).draw();

    var notes8 = [
      new VF.TabNote({
        positions: [
          { str: 6, fret: 0 },
          { str: 2, fret: 1 },
        ],
        duration: "q",
      }),
      new VF.TabNote({
        positions: [{ str: 4, fret: 2 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 1, fret: 3 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 5, fret: 0 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 3, fret: 0 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 4, fret: 2 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 2, fret: 1 }],
        duration: "16",
      }),
    ];

    // render notes8 in svg
    VF.Formatter.FormatAndDraw(context, stave8, notes8);

    /* CHORUS */

    // Create an SVG renderer and attach it to the DIV element named "vexChorusElement".
    const chorusElement = document.getElementById("vexChorusElement");
    const chorusRenderer = new VF.Renderer(
      chorusElement,
      VF.Renderer.Backends.SVG
    );

    // Configure the rendering chorusContext.
    chorusRenderer.resize(2000, 275);
    const chorusContext = chorusRenderer.getContext();
    chorusContext.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

    // Create a tab stave of width 250 at position 10, 0 on the canvas.
    stave = new VF.TabStave(10, 0, 250);
    stave.addClef("tab").setContext(chorusContext).draw();

    /* 
e|---8----7-----|-8-------8-------8---|
B|--------------|----8-------8--------|
G|---5----------|-------5------5------|
D|------------5-|-------5--------5----|
G|------0---5---|------------0-----5--|
C|-0------------|-0-------------------| 
*/
    notes = [
      new VF.TabNote({
        positions: [{ str: 6, fret: 0 }],
        duration: "q",
      }),
      new VF.TabNote({
        positions: [
          { str: 4, fret: 5 },
          { str: 1, fret: 8 },
        ],
        duration: "q",
      }),
      new VF.TabNote({
        positions: [{ str: 5, fret: 0 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 4, fret: 5 }],
        duration: "q",
      }),
    ];

    // render notes in svg
    VF.Formatter.FormatAndDraw(chorusContext, stave, notes);

    // Create a tab stave2 of width 250 at the end of the first stave, 0 on the canvas.
    stave2 = new VF.TabStave(stave.width + stave.x, 0, 250);
    stave2.setContext(chorusContext).draw();

    notes2 = [
      new VF.TabNote({
        positions: [
          { str: 6, fret: 0 },
          { str: 1, fret: 8 },
        ],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 2, fret: 8 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [
          { str: 4, fret: 5 },
          { str: 3, fret: 5 },
        ],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 1, fret: 8 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [
          { str: 5, fret: 0 },
          { str: 2, fret: 8 },
        ],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 3, fret: 5 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [
          { str: 4, fret: 5 },
          { str: 1, fret: 8 },
        ],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 2, fret: 8 }],
        duration: "16",
      }),
    ];

    // render notes2 in svg
    VF.Formatter.FormatAndDraw(chorusContext, stave2, notes2);

    /*
e|---8--7-------|-8-------8-------8-----|
B|--------6-----|----8-------8-------8--|
G|---5--------5-|-------5-------5-------|
D|----------5---|-------5---------5-----|
G|------0-------|------------0----------|
C|-0------------|-0---------------------|
*/
    // Create a tab stave3 of width 250 at the end of the first stave, 0 on the canvas.
    stave3 = new VF.TabStave(stave2.width + stave2.x, 0, 250);
    stave3.setContext(chorusContext).draw();

    notes3 = [
      new VF.TabNote({
        positions: [{ str: 6, fret: 0 }],
        duration: "q",
      }),
      new VF.TabNote({
        positions: [
          { str: 4, fret: 5 },
          { str: 1, fret: 8 },
        ],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [
          { str: 5, fret: 0 },
          { str: 2, fret: 6 },
        ],
        duration: "q",
      }),
      new VF.TabNote({
        positions: [{ str: 4, fret: 5 }],
        duration: "q",
      }),
    ];

    // render notes3 in svg
    VF.Formatter.FormatAndDraw(chorusContext, stave3, notes3);

    // Create a tab stave3 of width 250 at the end of the third stave, 0 on the canvas.
    stave4 = new VF.TabStave(stave3.width + stave3.x, 0, 250);
    stave4.setContext(chorusContext).draw();

    notes4 = [
      new VF.TabNote({
        positions: [
          { str: 6, fret: 0 },
          { str: 1, fret: 8 },
        ],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 2, fret: 8 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [
          { str: 4, fret: 5 },
          { str: 3, fret: 5 },
        ],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 1, fret: 8 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [
          { str: 5, fret: 0 },
          { str: 2, fret: 8 },
        ],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 3, fret: 5 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [
          { str: 4, fret: 5 },
          { str: 1, fret: 8 },
        ],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 2, fret: 8 }],
        duration: "16",
      }),
    ];

    // render notes4 in svg
    VF.Formatter.FormatAndDraw(chorusContext, stave4, notes4);

    /* Next line */
    /*-----------*/
    // Create a tab stave3 of width 250 at the end of the third stave, 0 on the canvas.
    stave5 = new VF.TabStave(10, stave4.height + stave4.y, 250);
    stave5.addClef("tab").setContext(chorusContext).draw();

    notes5 = [
      new VF.TabNote({
        positions: [{ str: 6, fret: 0 }],
        duration: "q",
      }),
      new VF.TabNote({
        positions: [
          { str: 4, fret: 5 },
          { str: 1, fret: 8 },
        ],
        duration: "q",
      }),
      new VF.TabNote({
        positions: [{ str: 5, fret: 0 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 1, fret: 7 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 4, fret: 5 }],
        duration: "q",
      }),
    ];

    // render notes5 in svg
    VF.Formatter.FormatAndDraw(chorusContext, stave5, notes5);

    stave6 = new VF.TabStave(
      stave5.width + stave5.x,
      stave4.height + stave4.y,
      250
    );
    stave6.setContext(chorusContext).draw();

    notes6 = [
      new VF.TabNote({
        positions: [
          { str: 6, fret: 0 },
          { str: 1, fret: 8 },
        ],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 2, fret: 8 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [
          { str: 4, fret: 5 },
          { str: 3, fret: 5 },
        ],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 1, fret: 8 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [
          { str: 5, fret: 0 },
          { str: 2, fret: 8 },
        ],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 3, fret: 5 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [
          { str: 4, fret: 5 },
          { str: 1, fret: 8 },
        ],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 2, fret: 8 }],
        duration: "16",
      }),
    ];

    // render notes6 in svg
    VF.Formatter.FormatAndDraw(chorusContext, stave6, notes6);

    // e|-------------|-------3---------|
    // B|---1---0-----|-1-----------0h1-|
    // G|-----------0-|---0-------0-----|
    // D|---2-----0---|-----2-------0h2-|
    // G|-2-----------|-0-------0-------|
    // C|-----4-------|-----------------|

    stave7 = new VF.TabStave(
      stave6.width + stave6.x,
      stave4.height + stave4.y,
      250
    );
    stave7.setContext(chorusContext).draw();

    notes7 = [
      new VF.TabNote({
        positions: [{ str: 5, fret: 2 }],
        duration: "q",
      }),
      new VF.TabNote({
        positions: [
          { str: 4, fret: 2 },
          { str: 2, fret: 1 },
        ],
        duration: "q",
      }),
      new VF.TabNote({
        positions: [{ str: 6, fret: 4 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 2, fret: 0 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 4, fret: 0 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 3, fret: 0 }],
        duration: "16",
      }),
    ];

    // render notes7 in svg
    VF.Formatter.FormatAndDraw(chorusContext, stave7, notes7);

    stave8 = new VF.TabStave(
      stave7.width + stave7.x,
      stave4.height + stave4.y,
      250
    );
    stave8.setContext(chorusContext).draw();

    notes8 = [
      new VF.TabNote({
        positions: [
          { str: 5, fret: 0 },
          { str: 2, fret: 1 },
        ],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 3, fret: 0 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 4, fret: 2 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 1, fret: 3 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 5, fret: 0 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [{ str: 3, fret: 0 }],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [
          { str: 4, fret: 0 },
          { str: 2, fret: 0 },
        ],
        duration: "16",
      }),
      new VF.TabNote({
        positions: [
          { str: 4, fret: 2 },
          { str: 2, fret: 1 },
        ],
        duration: "16",
      }),
    ];

    // render notes8 in svg
    VF.Formatter.FormatAndDraw(chorusContext, stave8, notes8);

    VF.TabTie.createHammeron({
      first_note: notes8[6],
      last_note: notes8[7],
      first_indices: [0],
      last_indices: [0],
    })
      .setContext(chorusContext)
      .draw();

    VF.TabTie.createHammeron({
      first_note: notes8[6],
      last_note: notes8[7],
      first_indices: [1],
      last_indices: [1],
    })
      .setContext(chorusContext)
      .draw();
  };

  useEffect(init, []);

  return (
    <div className="NeverGoingBackAgain">
      <h1>Never Going Back Again</h1>
      <p>Capo: 6th fret</p>
      <p>Tuning: CGDGBE</p>
      <h2>Verse Riff</h2>
      <div id="vexVerseElement"></div>
      <h2>Chorus Riff</h2>
      <div id="vexChorusElement"></div>
      <h2>Lyrics</h2>
      <pre>
        {`
[Verse 1]
 
She broke down and let me in
Made me see where I've been
 
 
[Chorus]
 
Been down one time
Been down two times
I'm never going back again
 
[Verse 2]
 
You don't know what it means to win
Come down and see me again
 
 
[Chorus]
 
Been down one time
Been down two times
I'm never going back again
`}
      </pre>
    </div>
  );
}

export default NeverGoingBack;
