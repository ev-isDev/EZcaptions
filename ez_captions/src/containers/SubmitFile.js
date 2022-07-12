import React from 'react'
import Button from './Button';
import { useState } from 'react'

export const SubmitFile = ({ closeModal }) => {
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
        // <div className='download'>
        //     <h3>Or input your own .srt file!</h3>
        //     <input type="file" name="file" onChange={changeHandler} className='btn' id='inputFile'/>
        //     <div>
		// 		<Button text="submit" color ="blue" onClick={handleSubmission}/>
		// 	</div>
        // </div>

        <div className='modal-background'>
            <div className='modal-container'>
                <div className='titleCloseBtn'>
                <button className='titleCloseBtn button' onClick={() => {closeModal(false)}}> X </button>
                </div>
                <div className='title-modal'>
                    <h1>Are you sure you'd like to import</h1>
                    </div>
                    <div className='modal-body'>
                        
                        <p >
                            this will delete all captions currently in use!
                        </p>
                        </div>
                         <div className='download'>
                        <input type="file" name="file" onChange={changeHandler} className='btn' id='inputFile'/>
                         <div className='titleCloseBtn'>
		 		        <Button text="submit" color ="blue" onClick={handleSubmission}/>
		 	        </div>
                    </div>
                    
                    <div className='footer-modal'>
                    
                    </div>
                </div>
            </div>

  )
}

export default SubmitFile