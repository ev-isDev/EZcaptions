import React from 'react'
import { useState } from 'react'


export const NewCaption = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')

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
        setText('')
        setStart('')
        setEnd('')     
    }

  return (
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
