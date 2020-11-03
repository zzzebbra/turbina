import React from 'react';
import Main from './Main/Main';
import Player from './Player/Player';
import Form from './Form/Form';
import './app.css';

function App() {
  return (
    <main className="app">
      <Player />
      <Main />
    </main>
  );
}

export default App;
