import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useState } from 'react'
// import { useContext } from 'react'
// import { setState } from 'react'
import {ImPointUp, ImPointDown} from 'react-icons/im'

const Caption = ({ caption, onDelete, onToggle, onEdit, onShiftup, onShiftDown }) => {

  const [text, setText] = useState(caption.text)
  const [start, setStart] = useState(caption.start)
  const [end, setEnd] = useState(caption.end)
  const [id, setID] = useState(caption.id)
  const [edit, setEdit] = useState(false)
  // The useState function holds state in react and allows a user to change the state
  // with the set____ functions. the second parameter after const are functions to change the state!

  const onSubmit = (e) => {
      e.preventDefault()
      if (!text) {
          alert('please add caption!')
          return
      }
      if (!start) {
          alert('please add starting timestamp!')
          return
      }
      if (!end) {
          alert('please add end timestamp!')
          return
      }

      onEdit({text, start, end, edit, id})
  }

  return (
    <div className={`caption ${caption.edit ? 'edit' : ''}`}onDoubleClick={() =>
    onToggle(caption.id)}>
        {/* this div is how captions are rendered. the caption is an h3 and the start and endtimes are in a <p> 
        we also pass in an onDelete prop so that the Caption will delete itself if asked
        the className is for styling see STYLESHEET app.css*/}
        <div className='caption-tools'>
            <h3>
            <FaTimes style={{color:'red', cursor: 'pointer'}} onClick={() => onDelete(caption.id)} />
            <ImPointDown onClick={() => onShiftDown(caption.id)}/>
            <ImPointUp onClick={() => onShiftup(caption.id)}/>
            </h3>
        </div>
        <h3>{caption.text}</h3>
        <p>{caption.start} -> {caption.end}</p>

        {caption.edit ? <form className='add-form' onSubmit={onSubmit} >
        <div className='form-control'>
            <label>Caption</label>
            <input type='text' placeholder='insert caption here'
            value = {text} onChange={(e) => setText(e.target.value)}/>
        </div>
        
        <div className='form-control'>
            <label>Starting Time Stamp</label>
            <input type='text' placeholder='MM:SS'
            value = {start} onChange={(e) => setStart(e.target.value)}/>
        </div>

        <div className='form-control'>
            <label>Ending Time Stamp</label>
            <input type='text' placeholder='MM:SS'
            value = {end} onChange={(e) => setEnd(e.target.value)}/>
        </div>
        <input type='submit' value='Edit Caption' className='btn btn-block'/>
            
    </form> : ''}
    </div>
  )
}

export default Caption