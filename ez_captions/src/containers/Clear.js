import React from 'react'
import Button from './Button'

export const Clear = ({closeModal, onClear}) => {
  return (
    <div className='modal-background'>
            <div className='modal-container'>
                <div className='titleCloseBtn'>
                <button className='titleCloseBtn button' onClick={() => {closeModal(false)}}> X </button>
                </div>
                <div className='title-modal'>
                    <h1>Are you sure you'd like to clear all captions</h1>
                    </div>
                    <div className='modal-body'>

                        <p>
                            this will delete all captions currently in use!
                        </p>
                        </div>

                         <div className='titleCloseBtn'>
		 		        <Button text="Clear" color ="red" onClick={onClear}/>
                    </div>
                    <div className='footer-modal'>
                    
                    </div>
                </div>
            </div>
  )
}

export default Clear