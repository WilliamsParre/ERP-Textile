import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import axios from 'axios';
import './Login.css';
import Swal from 'sweetalert2';
import LoginPic from './LoginPic.jpg';

function Login({ setLoginUser }) {

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const history = useHistory();

    const handleChange = e => {
        const { name, value } = e.target;

        setUser({
            ...user,
            [name]: value
        });
    }

    const login = () => {
        axios.post("http://localhost:8000/login", user)
            .then(res => {
                if (res.data.message === "Login Successfull!") {
                    setLoginUser(res.data.user);
                    history.push('/');
                }else{
                    Swal.fire({
                        icon: 'warning',
                        title: 'Oops...',
                        text: 'User '+res.data.user+' kindly register or Invalid Credentials',
                    });
                    // alert("User "+res.data.user+" kindly register");
                }
                setUser({
                    email: "",
                    password: ""
                });
            });
    }

    return (
        <div className="background-login">
            {console.log(user)}
            <div className="login-container">
                <div className="login-pic-container">
                    <img src={LoginPic} alt="Pic" />
                </div>
                <div className="login-card">
                    <h2>Login</h2>
                    <div>
                        <div className="form-group-login">
                            <label for="email">Email</label>
                            <input type="text" className="form-control" id="email" name="email" value={user.email} placeholder="Enter your email" onChange={handleChange} />
                        </div>
                        <div className="form-group-login">
                            <label for="password">Password
                                <Link to='/ReSetPass' style={{ color: "#27cdff", textDecoration: 'none', marginLeft: '6rem' }}>Forgot Password?</Link></label>
                            <input type="password" className="form-control" id="password" name="password" value={user.password} placeholder="Enter a password" onChange={handleChange} />
                        </div>
                        <div className="form-group-login">
                            <button type="submit" className="btn btn-primary btn-lg" onClick={login}>Log in</button>
                        </div>
                    </div>
                    <p>Don't have an account? <Link to='/signup' style={{ color: "#27cdff", textDecoration: 'none' }}>Create an account</Link>.</p>
                </div>
            </div>
        </div>
    )
}

export default Login
