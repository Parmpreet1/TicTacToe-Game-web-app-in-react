import React, { useState, useEffect } from "react";
import { Board } from "./components/board";
import { History } from "./components/History";
import { StatusMessage } from "./components/StatusMessage";
import "./components/root.scss";
import { calculateWinner } from "./helpers";
const App = () => {
  const NewGame=[{board:Array(9).fill(null),isXNext:true}]
  const [history, setHistory] = useState(NewGame);
  //const [isXNext, setisXNext] = useState(true);
  const [CurrentMove, setCurrentMove] = useState(0)
  const current=history[CurrentMove]
  useEffect(() => {
    console.log(current);
  }, [current]);
  const {winner,winingsequence} = calculateWinner(current.board);

  const handleOnClick = (position) => {
    if (current.board[position] || winner) {
      return;
    }
    setCurrentMove()
    setHistory((prev) => {
      const last=prev[prev.length-1];
      setCurrentMove(prev.length)
      const newboard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? "X" : "O";
        }
        return square;
      });
      return prev.concat({board:newboard,isXNext:!last.isXNext});
    });
    setCurrentMove((prevMove) => prevMove+1);
  };
  const moveTo=(move)=>{
    setCurrentMove(move)
  }
  const onNewGame=()=>{
    const newstate=NewGame
    setHistory(newstate)
    setCurrentMove(0)
  }

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2><StatusMessage winner={winner} current={current}/></h2>
      <Board board={current.board} handleOnClick={handleOnClick} winingsequence={winingsequence} />
      <button type="button" onClick={onNewGame}>Start New Game</button>
      <History history={history} moveTo={moveTo} CurrentMove={CurrentMove}/>
    </div>
  );
};

export default App;
