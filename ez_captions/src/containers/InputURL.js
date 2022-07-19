import React from 'react'
import { useState } from 'react'
import validator from 'validator'
import ReactPlayer from 'react-player'
import ImportVideo from './ImportVideo'


const InputURL = ({ captionsList }) => {
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
            {valid ? <ReactPlayer width="100%" url={URL} controls/> : <ImportVideo capList={captionsList}/>}
            <label>or use a Youtube Video link: </label>
            <input type='text' placeholder='Enter URL' value={URL} onChange={(e) => setURL(e.target.value)}/>
            <button onClick={validate} className="btn" style={{width: '100%'}}>Enter</button>
        </div>
    
  )
}

export default InputURL