import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useState } from 'react'

const Caption = ({ caption, onDelete, onToggle}) => {

  const [text, setText] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
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

      onToggle({text, start, end, edit})
      setText('') // note here, we're changing the text box after a submission back to blank
      setStart('')
      setEnd('')
      setEdit(false) 
  }

  return (
    <div className={`caption ${caption.edit ? 'edit' : ''}`}onDoubleClick={() =>
    onToggle(caption.id)}>
        {/* this div is how captions are rendered. the caption is an h3 and the start and endtimes are in a <p> 
        we also pass in an onDelete prop so that the Caption will delete itself if asked
        the className is for styling see STYLESHEET app.css*/}
        <h3>{caption.text} <FaTimes style={{color:'red', cursor: 'pointer'}} onClick={() => onDelete(caption.id)} /></h3>
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