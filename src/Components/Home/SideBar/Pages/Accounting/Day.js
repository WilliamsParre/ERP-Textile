import React, { useState } from 'react'

function Day() {

    const [day, setDay] = useState(false);
    const [ebill, setEBill] = useState(false);
    const [others, setOthers] = useState(false);
    const [totSal, setTotSal] = useState('');
    const [nWorkers, setNoOfWorkers] = useState('');

    const handleTemporary = () => {
        setDay(!day);
    }

    const handleEBill = () => {
        setEBill(!ebill);
    }

    const handleOthers = () => {
        setOthers(!others);
    }


    return (
        <div>
            <div className="container">
                <button className="btn btn-outline-dark" style={{ width: '80%', padding: '1rem', margin: '2rem' }} onClick={handleTemporary}>Temporary Employee</button>
                {day ?
                    <div>
                        <div className="row Input">
                            <label className="col-12" for="salary">Total Salary : </label>
                            <input className="col form-control" id="salary" type="number" value={totSal} type="number" placeholder="Enter total salary of the day" onChange={(e) => { setTotSal(e.target.value) }} ></input>
                        </div>
                        <div className="row Input">
                            <label className="col-12" for="no_of_workers">No of workers : </label>
                            <input className="col form-control" id="no_of_workers" type="number" value={nWorkers} type="number" placeholder="Enter no of workers" onChange={(e) => { setNoOfWorkers(e.target.value) }} ></input>
                        </div>
                        <button className="btn btn-primary" style={{width:'80%'}}>Save</button>
                    </div> : null}
                <button className="btn btn-outline-dark" style={{ width: '80%', padding: '1rem', margin: '2rem' }} onClick={handleEBill}>E Bill</button>
                {ebill ? <h2>H2</h2> : null}
                <button className="btn btn-outline-dark" style={{ width: '80%', padding: '1rem', margin: '2rem' }} onClick={handleOthers}>Others</button>
                {others ? <h3>H3</h3> : null}
            </div>

        </div>
    )
}

export default Day
