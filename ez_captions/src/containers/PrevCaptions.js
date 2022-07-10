import React from 'react'
import { AddPreviewCaption } from './AddPreviewCaption'
import { PreviewCaption } from './PreviewCaption'

const PrevCaptions = ({ prevCaptions, deleteCaption, onToggle, onEdit }) => {
  return (
    <>
    {prevCaptions.map((prevCaption) => (
    <PreviewCaption prevCaption={prevCaption} deleteCaption={deleteCaption} onToggle={onToggle} onEdit={onEdit}/>))}
    </>
  )
}

export default PrevCaptions