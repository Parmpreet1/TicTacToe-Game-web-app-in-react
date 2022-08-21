import React from "react";
import { Square } from "./square";

export const Board = ({handleOnClick,board,winingsequence}) => {


  const renderSquare=(position)=>{
    const iswiningsequence=winingsequence.includes(position)
    return(
      <Square value={board[position]} onClick={()=>handleOnClick(position)} iswiningsequence={iswiningsequence} />
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
