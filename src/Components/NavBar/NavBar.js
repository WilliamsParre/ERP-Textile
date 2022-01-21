import React from 'react';
import Logo from './Logo.jpg';
import { Link } from 'react-router-dom';
function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark fixed-top" style={{ padding: '10px' }}>
                <form className="form-inline">
                    <img src={Logo} width="30" height="30" alt="Logo" className="d-inline-block align-top" style={{borderRadius:'50%', marginRight: '12px'}}/>
                    <Link className="navbar-brand" to="/">Textile</Link>
                    <Link className="navbar-brand" to="/">Home</Link>
                    <a className="navbar-brand" href="/#About">About</a>
                    <a className="navbar-brand" href="/#Services">Services</a>
                    <Link className="navbar-brand" to="/contactus">Contact Us</Link>
                </form>
                <form className="form-inline">
                    <a className="btn btn-outline-light my-2 my-sm-0" href="/login" style={{ marginRight: '0.8rem' }}>Login</a>
                    <a className="btn btn-outline-primary my-2 my-sm-0" href="/signup">Sign Up</a>
                </form>
            </nav>
        </div>
    );
}

export default NavBar;
