import logo from './logo.svg';
import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import './App.css';
import WeightJourney from './WeightJourney/WeightJourney'

function App() {
  return (
    <div className="App">
      
      <WeightJourney></WeightJourney>
    </div>
  );
}

export default App;
