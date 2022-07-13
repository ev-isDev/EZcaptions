import React, { useState } from 'react';
import Button from './Button';
import { ReactComponent as Logo } from '../loginLogo.svg'

class Login extends React.Component {
    state = {
        email: '',
        pwd: '',
        showing: true
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
        this.setState({
            showing: false
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state);
    }

    render() {
        return (


            <div className='modal-background'>
                <div className='modal-container'>
                    <div className='titleCloseBtn'>
                        <button className='titleCloseBtn button' onClick={() => { this.props.closeModal(false) }}> X </button>
                    </div>
                    <div className='title-modal'>
                        Log in
                    </div>
                    {/* Start of Login  (Within Modal)*/}

                    <div>
                        <div>
                            <Logo className='loginlogo' />
                        </div>
                        <div className="LoginPrompt">
                            <form onSubmit={this.handleSubmit}>
                                <input type='email' name='email' placeholder='email...' required onChange={this.handleChange} />
                                <input type='password' name='pwd' placeholder='password...' required onChange={this.handleChange} />
                                <button onSubmit={this.handleSubmit}>Log in</button>
                            </form>
                        </div>
                    </div>

                    {/* once variable showing is set to false, this message should show */}
                    {/* <div className="LoginFinished"> Logged in</div> */}


                    {/* End of Login  (End of modal)*/}

                    <div className='footer-modal'>

                    </div>
                </div>
            </div>
        )
    }
}

export default Login;