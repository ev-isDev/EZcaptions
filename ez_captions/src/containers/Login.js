import React, { useState } from 'react';
import Button from './Button';
import { ReactComponent as Logo } from '../loginLogo.svg'
import Form from './RegisterForm';
import Home from './Home'

// const [flag, setFlag] = useState(false);
let loggedIn = true;
let flag = false;
let error = false;

class Login extends React.Component {

    state = {
        email: '',
        pwd: '',
        //flag: false,
        //loggedIn: true
    }
    errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h3>Error logging in</h3>
            </div>
        );
    };
    handleLogin(e) {
        e.preventDefault();
        let acc_email = localStorage.getItem("Email").replace(/"/g, "");
        let acc_pwd = localStorage.getItem("Password").replace(/"/g, "");

        console.log(acc_email);
        console.log(acc_pwd);

        if (!this.state.email || !this.state.pwd) {
            //setFlag(true);
            flag = true;
            error = true;
            this.errorMessage();
            console.log("Empty params")
        } else if (this.state.email !== acc_email || this.state.pwd !== acc_pwd) {
            //setFlag(true);
            flag = true;
            error = true;
            this.errorMessage();
            console.log("Im here");
        } else {
            //setFlag(false);
            flag = false;
            error = false;
            loggedIn = false;
            console.log("here, loggedIn =", loggedIn);

        }
        e.target.elements.pwd.value = 'ab';
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state);
        this.handleLogin(e);
        //e.target.elements.email.value = ' ';
        e.target.elements.pwd.value = 'a';
    }


    render() {
        return (


            <div className='modal-background'>
                <div className='modal-container'>
                    <div className='titleCloseBtn'>
                        <button className='titleCloseBtn button' onClick={() => { this.props.closeModal(false) }}> X </button>
                    </div>
                    <div className='title-modal'>
                        Login
                    </div>

                    {/* Start of Login  (Within Modal)*/}

                    < div >
                        <div>
                            <Logo className='loginlogo' />
                        </div>
                        <div className="LoginPrompt">
                            {loggedIn ? (<form onSubmit={this.handleSubmit}>
                                <input type='email' name='email' placeholder='email...' required onChange={this.handleChange} />
                                <input type='password' name='pwd' placeholder='password...' required onChange={this.handleChange} />
                                <button onSubmit={this.handleSubmit}>Login</button>
                            </form>) : (<Home />)}
                            {error ? this.errorMessage() : ''}

                        </div>


                    </div>

                    {/* once variable showing is set to false, this message should show */}
                    {/* <div className="LoginFinished"> Logged in</div> */}


                    {/* End of Login  (End of modal)*/}

                    <div className='footer-modal'>
                        <Form />
                    </div>
                </div>
            </div >
        )
    }
}

export default Login;