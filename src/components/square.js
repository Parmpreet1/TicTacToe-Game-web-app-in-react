import React from 'react'

export const Square = ({value,onClick,iswiningsequence}) => {
  return (
    <>
      <button type="button" className='square' onClick={onClick} style={{fontWeight:iswiningsequence? "bold":"normal"}}>{value}</button>
      </>
  )
}
