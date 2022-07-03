import React from 'react'
import Caption from './Caption.js'

const Captions = ({ captions }) => {
  return (
    <>
    {captions.map((caption) => (
    <Caption caption={caption} />))}
    </>
  )
}

export default Captions