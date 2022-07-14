import React from 'react'
import { useState } from 'react'
import { Validator } from 'react'
import validator from 'validator'
import ReactPlayer from 'react-player'
import VideoPlaybackWindow from './VideoPlaybackWindow'
import { AddPreviewCaption } from './AddPreviewCaption'

const InputURL = () => {
    const [URL, setURL] = useState('')
    const [valid, setValid] = useState(false)
    const validate = (e) => {
       if (validator.isURL(URL)) {
        e.preventDefault();
        setValid(true);
       } else {
        alert('invalid url')
        return;
       }      
    }
  return (
    <form onSubmit={validate}>
        <div className='form-control'>
        <label>Upload a Youtube Video To Caption! </label>
        <input type='text' placeholder='Enter URL' value={URL} onChange={(e) => setURL(e.target.value)}/>
        <input input type='submit' value='Enter' className='btn btn-block'/>
        {valid ? <ReactPlayer width="100%" url={URL} controls/> : <VideoPlaybackWindow/>}
        
        </div>
    </form>
  )
}

export default InputURL