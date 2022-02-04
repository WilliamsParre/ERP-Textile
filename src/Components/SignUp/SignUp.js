import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import axios from "axios";
import SignUpPic from './SignUpPic.jpg';
// import swal from 'sweetalert';
import Swal from 'sweetalert2';




function SignUp() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    });

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user;
        if (name && email && password && (password === reEnterPassword)) {
            axios.post("http://localhost:8000/register", user)
                .then(res => {
                    // alert(res.data.message);
                    if (res.data.message === 'User already exists') {
                        Swal.fire({
                            icon: 'warning',
                            title: 'Oops...',
                            text: res.data.message + ' .... ',
                        });

                    } else {
                        Swal.fire(
                            'Congratulations!',
                            'You have successfully Registered!',
                            'success'
                        );
                        setUser({
                            name: "",
                            email: "",
                            password: "",
                            reEnterPassword: ""
                        });                
                    }
                });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Some fields are missing!',
            });
        }
    }

    return (
        <div className="background-signup">
            <div className="signup-container">
                <div className="pic-container">
                    <img src={SignUpPic} alt="Pic" />
                </div>
                <div className="signup-card">
                    <h4>Get started with us today!<br />Create your account now</h4>
                    <div>
                        {console.log(user)};
                        <div className="form-group-signup">
                            <label for="username">Username</label>
                            <input type="text" className="form-control" id="username" name="name" value={user.name} placeholder="Enter your username" onChange={handleChange} />
                        </div>
                        <div className="form-group-signup">
                            <label for="email">Email</label>
                            <input type="text" className="form-control" id="email" name="email" value={user.email} placeholder="Ex : username@company.com" onChange={handleChange} />
                        </div>
                        <div className="form-group-signup">
                            <label for="password">Password</label>
                            <input type="password" className="form-control" id="password" name="password" value={user.password} placeholder="Enter a password" onChange={handleChange} />
                        </div>
                        <div className="form-group-signup">
                            <label for="re_password">Confirm Password</label>
                            <input type="password" className="form-control" id="re_password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter your password" onChange={handleChange} />
                        </div>
                        <div className="form-group-signup">
                            <button type="submit" className="btn btn-primary btn-lg" onClick={register}>Sign up</button>
                        </div>
                    </div>
                    <p>Already have an account? Login <Link to='/login' style={{ color: "#27cdff", textDecoration: 'none' }}>here</Link></p>
                </div>
            </div>
        </div>
    )
}

export default SignUp
