import React from 'react'
import Caption from './Caption.js'

const Captions = ({ captions, onDelete}) => {
  return (
    <>
    {captions.map((caption) => (
    <Caption caption={caption} onDelete={onDelete} />))}
    </>
  )
}

export default Captions
