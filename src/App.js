import React,{useState,useEffect} from "react";
import { Board } from "./components/board";
import "./components/root.scss";
import { calculateWinner } from "./helpers";
const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext,setisXNext]=useState(true);
  useEffect(() => {
    console.log(board);
  }, [board])
  const winner=calculateWinner(board);
  const message=winner? `Winner is ${winner}` : `Next Player is ${isXNext? "X":"O"}`;
  const handleOnClick=(position)=>{
    
    if (board[position] || winner) {
      return;
    }
    setBoard((prev)=>{
      return prev.map((square,pos)=>{
        if (pos===position) {
          return isXNext? "X":"O";
        }
        return square;
      })
    });
    setisXNext((prev)=>!prev)
    
  };
  
  return (
    <div className="app">
    <h1>TIC TAC TOE</h1>
    <h2>{message}</h2>
    <Board board={board} handleOnClick={handleOnClick}/>
  </div>
  )
}

export default App;
