import React, { useState } from 'react';
import { ReactComponent as Logo } from '../loginLogo.svg'
import Form from './RegisterForm';
import Home from './Home'

// const [flag, setFlag] = useState(false);
export let loggedIn = true; //false if logged in, true if need to log in
let flag = false; //separate log in flag
let error = false;

export function setLogin(value) {
    if(value === true || value === false){
        loggedIn = value;
    }
};

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
                <h5>Error logging in</h5>
            </div>
        );
    };

    // export setLogin(value) {
    //     if(value === true || value === false){
    //         loggedIn = value;
    //     }
    // };

    handleLogin(e) {
        e.preventDefault();
        let acc_email = localStorage.getItem("Email").replace(/"/g, "");
        let acc_pwd = localStorage.getItem("Password").replace(/"/g, "");

        console.log(acc_email);
        console.log(acc_pwd);

        if (!this.state.email || !this.state.pwd) {
            flag = true;
            error = true;
            this.errorMessage();
            console.log("Empty params")
        } else if (this.state.email !== acc_email || this.state.pwd !== acc_pwd) {
            flag = true;
            error = true;
            this.errorMessage();
            console.log("Im here");
        } else {
            flag = false;
            error = false;
            loggedIn = false;
            console.log("here, loggedIn =", loggedIn);
            localStorage.setItem("loggedInState",true);
            e.target.elements.pwd.value = acc_pwd;
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }
    handleSubmit = (e) => {
        //e.preventDefault()
        console.log(this.state);
        this.handleLogin(e);
        this.forceUpdate();
    }

    handleLogout = (e) => {
        loggedIn = true;
        console.log("LoggedIn after logout= ",loggedIn);
        localStorage.setItem("loggedInState",false);
        this.forceUpdate();
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
                            </form>) : (<Home></Home>)}
                            {loggedIn ? '': <button onClick={this.handleLogout}>Log out</button>}
                            
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