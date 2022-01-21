import React from 'react';
import './card.css';

function Card({ profilepic, Name, Fav , Mail}) {
    return (
        <div className="card-main">
            <div className='s1'>
                <div className='up'>
                    <div className='img'>
                        <img src={profilepic} alt="Profile Pic" />
                    </div>
                </div>
                <div className="low">
                    <h4><b>{Name}</b></h4>
                    <h5>{Fav}</h5>
                    <p>CSE Departement,<br/> <b>KL University</b><p>
                    </p>From Vijayawada</p>
                </div>
                <a className="btn btn-success"  href={Mail} style={{width: '100%'}}>Message</a>
            </div>
        </div>
    )
}

export default Card
