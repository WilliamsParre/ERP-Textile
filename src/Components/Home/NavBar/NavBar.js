import React from 'react'

function NavBar({ setLoginUser }) {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark justify-content-between" style={{ padding: '8px' }}>
                <div className="navbar-brand">ERP</div>
                <form className="in-line">
                    <div class="dropdown">
                        <button class="btn btn-outline-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle self-align-center" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                            </svg>
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ right: '0' }}>
                            {/* <a class="dropdown-item" href="/#">Action</a>
                            <button class="dropdown-item">Profile</button> */}
                            <button class="dropdown-item" type="button" onClick={() => setLoginUser({})}>Sign out</button>
                        </div>
                    </div>
                </form>
            </nav>
        </div>
    )
}

export default NavBar
