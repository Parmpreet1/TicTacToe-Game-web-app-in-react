import React from 'react'

export const Square = ({value,onClick,iswiningsequence}) => {
  return (
    <>
      <button type="button"  onClick={onClick} 
      className={`square ${iswiningsequence ? "winning": ""} ${value==='X'? 'text-green' : 'text-orange'}`}
     // style={{fontWeight:iswiningsequence? "bold":"normal"}}
     >
        {value}
        </button>
      </>
  )
}
