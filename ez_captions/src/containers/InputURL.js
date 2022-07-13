import React from 'react'
import { useState } from 'react'
import { Validator } from 'react'
import validator from 'validator'
import ReactPlayer from 'react-player'

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
        <label>Upload Youtube Video! </label>
        <input type='text' placeholder='Enter URL' value={URL} onChange={(e) => setURL(e.target.value)}/>
        <input input type='submit' value='Enter' className='btn btn-block'/>
        {valid ? <ReactPlayer url={URL}/> : ("")}
        </div>
    </form>
  )
}

export default InputURL