import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TableDataEntry from './TableDataEntry';
import './Employee.css'

function Employee() {

    const [data, setData] = useState([]);

    const getAllData = () => {
        axios.get('http://localhost:8000/getEmployee')
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    useEffect(() => {
        getAllData();
    }, []);




    return (
        <div className="Table">
            <table className="table">
                <thead className="thead" style={{textAlign:'left'}}>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Email</th>
                        <th scope="col">Qualification</th>
                        <th scope="col">MobileNo</th>
                        <th scope="col">Address</th>
                        <th scope="col">Job Type</th>
                        <th scope="col">Wing</th>
                        <th scope="col">Salary</th>
                    </tr>
                </thead>
                {data.map((entry) => (<TableDataEntry key={entry.id} id={entry.id} name={entry.name} gender={entry.gender} email={entry.email} age={entry.age} qualification={entry.qualification} mobileNo={entry.mobileNo} address={entry.address} jobType={entry.jobType} wing={entry.wing} salary={entry.salary} />))}
            </table>
        </div>
    )
}

export default Employee
