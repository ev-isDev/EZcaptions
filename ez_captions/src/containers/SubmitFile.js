import React from 'react'
import Button from './Button';
import { useState } from 'react'

export const SubmitFile = () => {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

    const handleSubmission = () => {
        const reader = new FileReader()
        reader.readAsText(selectedFile);
        reader.onload = (e) => {
            console.log(e.target.result);
        }
        
	};

    return (
        <div>
            <input type="file" name="file" onChange={changeHandler} className='btn' id='inputFile'/>
            <div>
				<Button text="submit" color ="blue" onClick={handleSubmission}/>
			</div>
        </div>
  )
}

export default SubmitFile