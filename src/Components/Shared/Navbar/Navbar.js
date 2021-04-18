import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
        <section className="row m-0 p-0">
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to="/"><span className="text-primary">Loan</span><span className="text-success">Services</span> </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <Link className="nav-link me-2 text-info" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-2 text-info" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-2 text-info" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-2 text-info" to="/dashboard">Admin</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-2 text-info" to="/dashboard">Services</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;