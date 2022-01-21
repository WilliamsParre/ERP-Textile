import React, { useState } from 'react';
import './AddEmployee.css';
import axios from 'axios';
import Swal from 'sweetalert2';

function AddEmployee() {

    const [employee, setEmployee] = useState({
        id: "",
        name: "",
        age: "",
        gender: "",
        email: "",
        qualification: "",
        mobileNo: "",
        address: "",
        jobType: "",
        wing: "",
        salary: ""
    });

    const handleChange = e => {
        const { name, value } = e.target
        setEmployee({
            ...employee,
            [name]: value
        })
    }

    const handleSubmit = () => {
        const { id, name, age, gender, email, qualification, mobileNo, address, jobType, wing, salary } = employee
        if (id && name && age && gender && email && qualification && mobileNo && address && jobType && wing && salary) {
            axios.post("http://localhost:8000/addEmployee", employee)
                .then(res => {
                    // alert(res.data.message);
                    if (res.data.message === 'Employee already exists') {
                        Swal.fire({
                            icon: 'warning',
                            title: 'Oops...',
                            text: res.data.message + ' .... ',
                        });

                    } else {
                        Swal.fire(
                            'Congratulations!',
                            `${res.data.message}`,
                            'success'
                        );
                    }
                    setEmployee({
                        id: "",
                        name: "",
                        age: "",
                        gender: "",
                        email: "",
                        qualification: "",
                        mobileNo: "",
                        address: "",
                        jobType: "",
                        wing: "",
                        salary: ""
                    })
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
        <div>
            {console.log(employee)}
            <div className="container Main">
                <div className="row Input">
                    <label className="col-2" for="id">Id : </label>
                    <input className="col form-control" id="id" value={employee.id} type="number" name="id" placeholder="Enter employee id" onChange={handleChange} ></input>
                </div>
                <div className="row Input">
                    <label className="col-2" for="name">Name : </label>
                    <input className="col form-control" id="name" value={employee.name} type="text" name="name" placeholder="Enter employee name" onChange={handleChange} ></input>
                </div>
                <div className="row Input">
                    <label className="col-2" for="age">Age : </label>
                    <input className="col form-control" id="age" value={employee.age} name="age" type="number" placeholder="Enter employee age" onChange={handleChange} ></input>
                </div>
                <div className="row Input">
                    <label className="col-2" for="gender">Gender : </label>
                    <input className="col form-control" id="gender" value={employee.gender} type="text" name="gender" placeholder="Enter employee Gender" onChange={handleChange} ></input>
                </div>
                <div className="row Input">
                    <label className="col-2" for="email">Email : </label>
                    <input className="col form-control" id="email" value={employee.email} type="text" name="email" placeholder="Ex : username@company.com" onChange={handleChange} ></input>
                </div>
                <div className="row Input">
                    <label className="col-2" for="qual">Qualification : </label>
                    <input className="col form-control" id="qual" value={employee.qualification} type="text" name="qualification" placeholder="Enter employee qualification" onChange={handleChange} ></input>
                </div>
                <div className="row Input">
                    <label className="col-2" for="mobile">Mobile No : </label>
                    <input className="col form-control" id="mobile" value={employee.mobileNo} type="number" name="mobileNo" placeholder="Enter employee mobile number" onChange={handleChange} ></input>
                </div>
                <div className="row Input">
                    <label className="col-2" for="address">Address : </label>
                    <input className="col form-control" id="address" value={employee.address} type="text" name="address" placeholder="Enter employee address" onChange={handleChange} ></input>
                </div>
                <div className="row Input">
                    <label className="col-2" for="job">Job Type : </label>
                    <input className="col form-control" id="job" name="jobType" type="text" value={employee.jobType} placeholder="Enter employee job type, i.e, Regular or Contract" onChange={handleChange} ></input>
                </div>
                <div className="row Input">
                    <label className="col-2" for="wing">Wing : </label>
                    <input className="col form-control" id="wing" name="wing" type="text" value={employee.wing} placeholder="Enter the wing in which employee is working or to work" onChange={handleChange} ></input>
                </div>
                <div className="row Input">
                    <label className="col-2" for="salary">Salary : </label>
                    <input className="col form-control" id="salary" name="salary" type="number" value={employee.salary} type="number" placeholder="Enter salary of employee" onChange={handleChange} ></input>
                </div>
                <button className="btn btn-success btn-blk" type="submit" onClick={handleSubmit}>Submit</button>

            </div>

        </div>
    )
}

export default AddEmployee
