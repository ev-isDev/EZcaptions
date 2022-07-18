import React from 'react'
import { useState } from 'react'
import validator from 'validator'
import ReactPlayer from 'react-player'
import ImportVideo from './ImportVideo'

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
    
        <div className='form-control'>
        <label>Upload a Youtube Video To Caption! </label>
        <input type='text' placeholder='Enter URL' value={URL} onChange={(e) => setURL(e.target.value)}/>
        <button onClick={validate} className="btn" style={{width: '100%'}}>Enter</button>
        {valid ? <ReactPlayer width="100%" url={URL} controls/> : <ImportVideo/>}
        </div>
    
  )
}

export default InputURL