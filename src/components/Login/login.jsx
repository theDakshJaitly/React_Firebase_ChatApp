import './login.css';
import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [avatar, setAvatar] = useState({
        file: null,
        url: ''
    });

    const handleAvatar = (e) => {
        if(e.target.files[0]){

            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            });
        }
    }

    const handleLogin = (e) => {
        e.preventDefault();
         
    }


    return(
        <div className="login">
            <div className="item">
                <h2>Welcome Back</h2>
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder="Email" name='email'/>
                    <input type="password" placeholder="Password" name='password'/>
                    <button>Login</button>
                </form>
            </div>
            <div className="seperator"></div>
            <div className="item">
                <h2>Create an account</h2>
                    <form>
                        <label htmlFor='file' className='filelabel'>
                            <img src={avatar.url || "./avatar.png"} alt=''/>
                            Upload Profile Picture</label>
                        <input type='file' id='file' style={{display:"none"}} onChange={handleAvatar}/>
                        <input type="text" placeholder="Username" name='username'/>
                        <input type="text" placeholder="Email" name='email'/>
                        <input type="password" placeholder="Password" name='password'/>
                        <button>Sign Up</button>
                    </form>
            </div>
        </div>
    )
}

export default Login;