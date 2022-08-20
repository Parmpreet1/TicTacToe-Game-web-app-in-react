import React from 'react'

export const StatusMessage = ({winner,current}) => {
    const noElementLeft=current.board.every(eve=>eve!==null)
  return (
    <div>
          {winner && `Winner is ${winner}` }
          {!winner && !noElementLeft &&`Next Player is ${current.isXNext ? "X" : "O"}`}
          {!winner && noElementLeft && `Match is tied`}
    </div>
  )
}
