import React from "react";
import { Board } from "./components/board";
import "./components/root.scss";
const App = () => {
  return (
    <div className="app">
    <h1>TIC TAC TOE</h1>
    <Board/>
  </div>
  )
}

export default App;
