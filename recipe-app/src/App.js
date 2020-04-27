import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchRecipes from './Components/SearchRecipes';

function App() {
  return (
    <div className="App">
      <h1>CookPot</h1>
      <SearchRecipes />
    </div>
  );
}

export default App;
