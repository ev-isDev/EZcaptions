import React from 'react'
import { PreviewCaption } from './PreviewCaption'
import uuid from 'react-uuid'

const PrevCaptions = ({ prevCaptions, deleteCaption, onToggle, onEdit }) => {
  return (
    <>
    {prevCaptions.map((prevCaption) => (
    <PreviewCaption key={uuid()} prevCaption={prevCaption} deleteCaption={deleteCaption} onToggle={onToggle} onEdit={onEdit}/>))}
    </>
  )
}

export default PrevCaptions