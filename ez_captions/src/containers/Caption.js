import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Caption = ({ caption, onDelete }) => {
  return (
    <div className='caption'>
        {/* this div is how captions are rendered. the caption is an h3 and the start and endtimes are in a <p> 
        we also pass in an onDelete prop so that the Caption will delete itself if asked
        the className is for styling see STYLESHEET app.css*/}
        <h3>{caption.text} <FaTimes style={{color:'red', cursor: 'pointer'}} onClick={() => onDelete(caption.id)} /></h3>
        <p>{caption.start} -> {caption.end}</p>
    </div>
  )
}

export default Caption