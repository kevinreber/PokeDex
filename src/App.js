import React from 'react';
import Header from './components/Header';
import PokeDex from './components/Pokedex';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <PokeDex />
      <a id="scroll-to-top" href="#top">TOP</a>
    </div>
  );
}

export default App;
