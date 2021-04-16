import React from 'react';
import './Sidebar.css';
const Sidebar = () => {
    return (
        <div>
            <div id="mySidenav" className="sidenav">
                <a href="/" id="home">Home</a>
                <a href="/dashboard" id="dashboard">Dashboard</a>
                <a href="/services" id="services">Services</a>
            </div>
        </div>
    );
};

export default Sidebar;