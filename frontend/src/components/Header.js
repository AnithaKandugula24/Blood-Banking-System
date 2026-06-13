import React from "react";
import { Link } from "react-router-dom";

const Header=()=>{
    return(<nav className="navbar navbar-expand-lg navbar-light header-container">
        <div className="container-fluid">
            <Link className="navbar-brand" to={'/'}>Blood Bank</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navbar-container" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link className="nav-link" aria-current="page" to={'/'}>Home</Link>
                <Link className="nav-link" to={'/about'}>About</Link>
                <Link className="nav-link" to={'/our-team'}>Our Team</Link>
                <Link className="nav-link" to={'/donor-request'}>Become a Donor</Link>
                <Link className="nav-link" to={'/dashboard'}>Dashboard</Link>
                <Link className="nav-link" to={'/contact'}>Contact</Link>
                
            </div>
            </div>
        </div>
</nav>)
}

export default Header;