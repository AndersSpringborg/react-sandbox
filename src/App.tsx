import React from 'react';
import logo from './logo.svg';
import './App.css';
import SpotifyLogin from './components/SpotifyLogin/SpotifyLogin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SpotifyLogin/>
      </header>
    </div>
  );
}

export default App;
