import React, { useState, useEffect } from "react";
import { Board } from "./components/board";
import "./components/root.scss";
import { calculateWinner } from "./helpers";
const App = () => {
  const [history, setHistory] = useState([{board:Array(9).fill(null),isXNext:true}]);
  //const [isXNext, setisXNext] = useState(true);
  const [CurrentMove, setCurrentMove] = useState(0)
  const current=history[CurrentMove]
  useEffect(() => {
    console.log(current);
  }, [current]);
  const winner = calculateWinner(current.board);
  const message = winner
    ? `Winner is ${winner}`
    : `Next Player is ${current.isXNext ? "X" : "O"}`;
  const handleOnClick = (position) => {
    if (current.board[position] || winner) {
      return;
    }
    setHistory((prev) => {
      const last=prev[prev.length-1];

      const newboard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? "X" : "O";
        }
        return square;
      });
      return prev.concat({board:newboard,isXNext:!last.isXNext});
    });
    setCurrentMove((prev) => prev+1);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board={current.board} handleOnClick={handleOnClick} />
    </div>
  );
};

export default App;
