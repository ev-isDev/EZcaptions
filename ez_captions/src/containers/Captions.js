import React from 'react'
import Caption from './Caption.js'

const Captions = ({ captions, onDelete, onToggle, onEdit, onShiftup, onShiftDown}) => {
  // This is how the list of captions is rendered. A mapped list of caption objects
  // we also pass in a onDelete prop for when the Applications asks to delete a certain
  // caption with a certain ID
  return (
    <>
    {captions.map((caption) => (
    <Caption caption={caption} onDelete={onDelete} onToggle={onToggle} onEdit={onEdit} onShiftup={onShiftup} onShiftDown={onShiftDown}/>))}
    </>
  )
}

export default Captions
