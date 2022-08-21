import React from 'react'

export const History = ({history,moveTo,CurrentMove}) => {
  return (<div className='history-wrapper'>
    <ul className='history'>
        {
        history.map((_,move)=>{
            return(
                <li key={move}>
                    <button type='button' 
                    className={
                        `btn-move ${move===CurrentMove? "active":""}` 
                    }
                    onClick={()=>(moveTo(move))}>
                        {move===0?`Game Start`:`Go to #${move}`}
                    </button>
                    </li>
            )
            
        })
    }
    </ul>
    </div>
  )
}
