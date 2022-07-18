import React from 'react'
import Button from './Button';

export const SubmitFile = ({ closeModal, onChange, submitCapFile }) => {
    return (
        <div className='modal-background'>
            <div className='modal-container'>
                <div className='titleCloseBtn'>
                <button className='titleCloseBtn button' onClick={() => {closeModal(false)}}> X </button>
                </div>
                <div className='title-modal'>
                    <h1>Are you sure you'd like to import a caption file?</h1>
                    </div>
                    <div className='modal-body'>
                        
                        <p >
                            this will delete all captions currently in use!
                        </p>
                        </div>
                         <div className='download'>
                        <input type="file" name="file" accept=".srt" onChange={onChange} className='btn' id='inputFile'/>
                         <div className='titleCloseBtn'>
		 		        <Button text="submit" color ="blue" onClick={submitCapFile}/>
		 	        </div>
                    </div>
                    
                    <div className='footer-modal'>
                    
                    </div>
                </div>
            </div>

  )
}

export default SubmitFile