import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Topbanner from '../Topbanner/Topbanner';
import './Header.css';
const Header = () => {
    return (
        <div>
           <Navbar></Navbar> 
           <Topbanner></Topbanner>
        </div>
    );
};

export default Header;