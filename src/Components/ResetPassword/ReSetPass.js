import React from 'react';
import './ReSetPass.css';
function ReSetPass() {
    return (
        <div className="background">
            <div className="card">
                    {/* <button type="button" className="btn btn-primary btn-lg btn-block">Block level button</button> */}
                    {/* <p>Enter your user account's email address</p> */}
                    <label for="exampleInputEmail1">Reset your password</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email address"/>
                    <button type="button" className="btn btn-success">Enter your user account's email address</button>
            </div>
        </div>
    );
}

export default ReSetPass
