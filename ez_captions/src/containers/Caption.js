import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Caption = ({ caption }) => {
  return (
    <div className='caption'>
        <h3>{caption.text} <FaTimes style={{color:'red', cursor: 'pointer'}} /></h3>
        <p>{caption.startTimeStamp} -> {caption.endTimeStamp}</p>
    </div>
  )
}

export default Caption