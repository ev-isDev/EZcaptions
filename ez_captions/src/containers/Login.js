import React from 'react';
import Button from './Button';
import {ReactComponent as Logo} from '../loginLogo.svg'

class Login extends React.Component {
    state = {
        email: '',
        pwd: ''
    }

    handleChange = (e) =>{
        const {name, value} = e.target
        this.setState({[name]:value})
    }
    handleSubmit = (e) => {
        e.preventDefault()
    }
    render(){
        return(


            <div className='modal-background'>
            <div className='modal-container'>
                <div className='titleCloseBtn'>
                <button className='titleCloseBtn button' onClick={() => {this.props.closeModal(false)}}> X </button>
                </div>
                <div className='title-modal'>
                    <h1>Are you sure you'd like to import</h1>
                    </div>
                    <div className='modal-body'>
                        
                        <p >
                            this will delete all captions currently in use!
                        </p>
                        </div>
                        
                        <div>
                <div>
                    <Logo className = 'loginlogo'/>
                </div>
                <div>
                    <form onSubmit = {this.handleSubmit}>
                        <input type='email' name='email' placeholder='email...' required onChange = {this.handleChange} />
                        <input type='password' name ='pwd' placeholder='password...' required onChange = {this.handleChange} />
                        <button onSubmit = {this.handleSubmit}>Log in</button>
                    </form>
                    
                </div>
            </div>
                    <div className='footer-modal'>
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;