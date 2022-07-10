import React from 'react'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import PrevCaptions from './PrevCaptions'
import Button from './Button'

export const PreviewCaption = ({ prevCaption, deleteCaption, onToggle, onEdit }) => {
    const [text, setPrevText] = useState([prevCaption.text])
    const [start, setPrevStart] = useState([prevCaption.start])
    const [end, setPrevEnd] = useState([prevCaption.end])
    const [id, setPrevID] = useState(prevCaption.id)
    const [edit, setPrevEdit] = useState(false)

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
    <div className={`caption ${prevCaption.edit ? 'edit' : ''}`}onDoubleClick={() =>
        onToggle(prevCaption.id)}>
            {/* this div is how captions are rendered. the caption is an h3 and the start and endtimes are in a <p> 
            we also pass in an onDelete prop so that the Caption will delete itself if asked
            the className is for styling see STYLESHEET app.css*/}
            <h3>{prevCaption.text} <FaTimes style={{color:'red', cursor: 'pointer'}} onClick={() => deleteCaption(prevCaption.id)} /></h3>
            <p>{prevCaption.start} -> {prevCaption.end}</p>
            {prevCaption.edit ? <form className='add-form' onSubmit={onSubmit} >
            <div className='form-control'>
                <label>Caption</label>
                <input type='text' placeholder='insert caption here'
                value = {text} onChange={(e) => setPrevText(e.target.value)}/>
            </div>
            
            <div className='form-control'>
                <label>Starting Time Stamp</label>
                <input type='text' placeholder='MM:SS'
                value = {start} onChange={(e) => setPrevStart(e.target.value)}/>
            </div>
    
            <div className='form-control'>
                <label>Ending Time Stamp</label>
                <input type='text' placeholder='MM:SS'
                value = {end} onChange={(e) => setPrevEnd(e.target.value)}/>
            </div>
            <input type='submit' value='Edit Caption' className='btn btn-block'/>
                
        </form> : ''}
        </div>
  )
}
