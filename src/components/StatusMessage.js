import React from 'react'

export const StatusMessage = ({winner,current}) => {
    const noElementLeft=current.board.every(eve=>eve!==null)
  return (
    <div className='status-message'>
          {winner && <>`Winner is <span className={winner==='X'? 'text-green' : 'text-orange'}>{winner}</span>` </>}
          {!winner && !noElementLeft &&
          <>
          `Next Player is <span className={current.isXNext ? 'text-green' : 'text-orange'}>{current.isXNext ? "X" : "O"}`</span>
          </>
          }
          {!winner && noElementLeft && <>
          <span className='text-green'>'X'</span>
          "and"
          <span className='text-green'>'Y'</span>
          `is tied`
          </>
          }

    </div>
  )
}
