import React, { useState } from 'react';
import axios from 'axios';
import './ContactUs.css';



function ContactUs() {

    const [isSubmitted, setSubmitted] = useState(false);
    const [isInValid, setInValid] = useState(false);
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNo: "",
        message: ""
    });

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleMessage = () => {
        if (isSubmitted)
            setSubmitted(false);
        else if (isInValid)
            setInValid(false);
    }

    const handleOnSubmit = () => {
        const { firstName, lastName, email, phoneNo, message } = user
        if (firstName && lastName && email && phoneNo && message) {
            axios.post("http://localhost:8000/contactus", user)
                .then(res => {
                    // alert(res.data.message);
                    setSubmitted(true);
                    setInValid(false);
                });
        } else {
            // alert("Kindly fill all the required deatils");
            setInValid(true);
        }

        setUser({
            firstName: "",
            lastName: "",
            email: "",
            phoneNo: "",
            message: ""
        });

    }


    return (
        <div>
            <div className="message">
                {isSubmitted ?
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <svg xmlns="http://www.w3.org/2000/svg" style={{ float: 'left' }} width="24" height="24" role="img" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                        Message successfully send.
                        <button type="button" class="btn-close" onClick={handleMessage}></button>
                    </div>
                    : null}

                {isInValid ?
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <svg xmlns="http://www.w3.org/2000/svg" style={{ float: 'left' }} width="24" height="24" role="img" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
                            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                        Kindly fill all the required fields.
                        <button type="button" class="btn-close" onClick={handleMessage}></button>
                    </div> : null}
            </div>
            <div className="contact-us-div">
                <h1>Write to Us</h1>
                <div>
                    <div class="form-group row">
                        <label for="firstName" class="col-sm-3 col-form-label">First Name</label>
                        <div class="col-sm-8">
                            <input type="firstName" class="form-control" id="firstName" name="firstName" value={user.firstName} placeholder="Enter Your First Name" onChange={handleChange} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="lastName" class="col-sm-3 col-form-label">Last Name</label>
                        <div class="col-sm-8">
                            <input type="lastName" class="form-control" id="lastName" name="lastName" value={user.lastName} placeholder="Enter Your Last" onChange={handleChange} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="email" class="col-sm-3 col-form-label">Email</label>
                        <div class="col-sm-8">
                            <input type="email" class="form-control" id="email" name="email" value={user.email} placeholder="username@company.com" onChange={handleChange} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="phoneNo" class="col-sm-3 col-form-label">Phone No</label>
                        <div class="col-sm-8">
                            <input type="phoneNumber" class="form-control" id="phoneNo" name="phoneNo" value={user.phoneNo} placeholder="Enter Your Phone Number" onChange={handleChange} />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1" style={{ display: 'flex', textAlign: 'left' }}>Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" style={{ marginLeft: '0px', marginRight: '20rem' }} name="message" value={user.message} onChange={handleChange}></textarea>
                        {/* <button className="btn btn-success" type="submit" style={{ marginTop: '1rem', marginBottom: '5rem', paddingTop: '5px', paddingBottom: '10px', paddingLeft: '10rem', paddingRight: '11.5rem' }} onClick={handleOnSubmit}>
                            Send
                        </button> */}
                    </div>
                    <div className="form-group" style={{width: '100%'}}>
                        <button className="btn btn-success btn-lg" type="submit"  style={{width:'100%', marginTop: '2rem'}} onClick={handleOnSubmit}>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;
