import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Caption = ({ caption, onDelete }) => {
  return (
    <div className='caption'>
        <h3>{caption.text} <FaTimes style={{color:'red', cursor: 'pointer'}} onClick={() => onDelete(caption.id)} /></h3>
        <p>{caption.start} -> {caption.end}</p>
    </div>
  )
}

export default Caption