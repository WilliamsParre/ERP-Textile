import React from 'react'
import { Link } from 'react-router-dom'
import Employee from './Employee'
import './EmployeeMain.css'

function EmployeeMain() {
    return (
        <div>
            <div className="container-fluid" style={{margin:'10px'}}>
                {/* <div className="row" > */}
                <div>


                    <div className="d-inline">
                        <Link className="btn btn-secondary add" to="/addEmployee" style={{ float: 'right' }}>Add</Link>
                    </div>
                </div>
                {/* </div> */}
                <Employee />
            </div>
        </div>
    )
}

export default EmployeeMain
