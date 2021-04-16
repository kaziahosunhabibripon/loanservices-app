import React from 'react';
import { Link } from 'react-router-dom';
import './LeftSidebar.css';
const LeftSidebar = () => {
    return (
        <div>
            <div className="left-sidebar">
                <Link className="active" to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/admin">Admin</Link>
            </div>
        </div>
    );
};

export default LeftSidebar;