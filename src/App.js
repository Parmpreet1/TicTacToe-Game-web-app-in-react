import React, { useState, useEffect } from "react";
import { Board } from "./components/board";
import { History } from "./components/History";
import "./components/root.scss";
import { calculateWinner } from "./helpers";
const App = () => {
  const [history, setHistory] = useState([{board:Array(9).fill(null),isXNext:true}]);
  const [CurrentMove, setCurrentMove] = useState(0)
  const current=history[CurrentMove]
  let [trackmove,settrackmove]=useState(0)
  useEffect(() => {
    setCurrentMove(trackmove);
    
  }, [trackmove])
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
    setCurrentMove(trackmove);
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
    settrackmove((pre)=>pre+1);
  
    
   // setCurrentMove(trackmove);
  };
  const moveTo=(move)=>{
    setCurrentMove(move)
  }

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board={current.board} handleOnClick={handleOnClick} />
      <History history={history} moveTo={moveTo}/>
    </div>
  );
};

export default App;
