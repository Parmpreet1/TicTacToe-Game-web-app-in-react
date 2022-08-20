import React from 'react'

export const History = ({history,moveTo}) => {
  return (
    <ul>
        {
        history.map((_,move)=>{
            return(
                <li key={move}><button type='button' onClick={()=>(moveTo(move))}>{move===0?`Game Start`:`Go to #${move}`}</button></li>
            )
            
        })
    }
    </ul>
  )
}
