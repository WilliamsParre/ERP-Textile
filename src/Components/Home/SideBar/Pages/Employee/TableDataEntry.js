import React from 'react'

function TableDataEntry({id, name, gender, email, age, qualification, mobileNo , address, jobType, wing, salary}) {
    return (
        <>
            <tr style={{textAlign:'left'}}>
                <th scope="row">{id}</th>
                <td>{name}</td>
                <td>{age}</td>
                <td>{gender}</td>
                <td>{email}</td>
                <td>{qualification}</td>
                <td>{mobileNo}</td>
                <td>{address}</td>
                <td>{jobType}</td>
                <td>{wing}</td>
                <td>{salary}</td>
            </tr>
        </>
    )
}

export default TableDataEntry
