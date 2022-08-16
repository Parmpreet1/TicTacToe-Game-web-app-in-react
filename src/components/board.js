import React,{useState} from "react";
import { Square } from "./square";

export const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext,setisXNext]=useState(true);
 
  const handleOnClick=(position)=>{
    if (board[position]) {
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
    console.log(board[position]);
  
  };

  const renderSquare=(position)=>{
    return(
      <Square value={board[position]} onClick={()=>handleOnClick(position)} />
    )
  
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div >
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};
