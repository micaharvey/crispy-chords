import React, { useState } from 'react';
import logo from './logo.svg';
import raw from './assets/chords/1ready/Headlights';
import './App.css';

function App() {
  const [song, setSong] = useState("");
  fetch(raw)
            .then((r) => r.text())
            .then(text  => {
              setSong(text);
              console.log(text);
            })  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <pre className="song"> 
          {song}
        </pre>
      </header>
    </div>
  );
}

export default App;
