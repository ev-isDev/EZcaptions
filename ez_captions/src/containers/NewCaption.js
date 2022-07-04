import React from 'react'
import { useState } from 'react'


export const NewCaption = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')
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

        onAdd({text, start, end})
        setText('') // note here, we're changing the text box after a submission back to blank
        setStart('')
        setEnd('')     
    }

  return ( // below is the submission form for new captions
  // note that whenever there is className, it is for the css stylesheet
    <form className='add-form' onSubmit={onSubmit} >
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
        <input type='submit' value='Submit Caption' className='btn btn-block'/>
            
    </form>
  )
}

export default NewCaption
