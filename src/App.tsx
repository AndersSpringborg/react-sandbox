import React from 'react';
import logo from './logo.svg';
import './App.css';
import ErrorLogger from './components/ErrorLogger/ErrorLogger';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ErrorLogger/>
      </header>
    </div>
  );
}

export default App;
