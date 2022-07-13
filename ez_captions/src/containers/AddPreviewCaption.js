import React, { useState } from 'react'
import VideoPlaybackWindow from './VideoPlaybackWindow'
import Button from './Button';
import { PreviewCaption } from './PreviewCaption';
import PrevCaptions from './PrevCaptions';

export const AddPreviewCaption = ({savePrev}) => {
    
    const [text, setPrevText] = useState('')
    const [start, setPrevStart] = useState('')
    const [end, setPrevEnd] = useState('')
    const [edit, setPrevEdit] = useState(false)

    const [prevCaptions, setPrevCaptions] = useState([
      {
        id: 4,
        start: "00:00",
        end: "00:00",
        text: "default",
        edit: false
      }
    ]);
    const addPrevCaption = (prevCaption) => { // add a new caption and give it a random ID
      const id = Math.floor(Math.random() * 10000) + 1 // we need to give the new caption a random ID
      const newPrevCaption = {id, ...prevCaption}
      setPrevCaptions([...prevCaptions, newPrevCaption]) // update the captions list as the previous list AND the new caption
      //console.log(caption) //THIS WAS FOR DEBUGGING
    }
    const deleteCaption = (id) => { // deletes caption
      //console.log(id) // THIS WAS FOR DEBUGGING
      setPrevCaptions(prevCaptions.filter((prevCaption) => prevCaption.id !==
      id)) // filters by keeping all captions that aren't the deleted captions ID
    }

    const handleEditCaption = (id) => { // allows the pop up for the editing prompt
      setPrevCaptions(prevCaptions.map((prevCaption) => prevCaption.id ===
      id ? {...prevCaption, edit: !prevCaption.edit} : prevCaption))
      console.log(id)
      // setCaptions(captions.map((caption) => caption.id ===
      // id ? updatedCaption : caption))
    }

    const editCaption = (updatedCaption) => { // actually does the editing!
      console.log(updatedCaption)
      setPrevCaptions(prevCaptions.map((prevCaption) => prevCaption.id ===
      updatedCaption.id ? updatedCaption : prevCaption))
    }
    
    

    const handleAdd = (e) => {
        e.preventDefault()
        if (!text) {
          return
      }
      if (!start) {
          return
      }
      if (!end) {
          return
      }
        addPrevCaption({text, start, end, edit})
        setPrevText('')
        setPrevStart('')
        setPrevEnd('')
    }
   
  return (
    
    <form className='add-form' onSubmit={handleAdd} >
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
        <input type='submit' value='Submit Caption' className='btn btn-block'/>
        <PrevCaptions prevCaptions={prevCaptions} deleteCaption={deleteCaption} onToggle ={handleEditCaption} onEdit={editCaption}/>
        <Button text="Save" color="green" onClick={() => savePrev(prevCaptions)}/>
    </form>
    
        
  )
}
