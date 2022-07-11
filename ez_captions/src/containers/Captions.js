import React from 'react'
import Caption from './Caption.js'
import uuid from 'react-uuid'

const Captions = ({ captions, onDelete, onToggle, onEdit }) => {
  // This is how the list of captions is rendered. A mapped list of caption objects
  // we also pass in a onDelete prop for when the Applications asks to delete a certain
  // caption with a certain ID
  return (
    <>
    {captions.map((caption) => (
    <Caption key={uuid()} caption={caption} onDelete={onDelete} onToggle={onToggle} onEdit={onEdit} />))}
    </>
  )
}

export default Captions
