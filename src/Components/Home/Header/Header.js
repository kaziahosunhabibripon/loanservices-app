import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Process from '../Process/Process';
import Services from '../Serivices/Services';
import Topbanner from '../Topbanner/Topbanner';
import './Header.css';
const Header = () => {
    return (
        <div>
           <Navbar></Navbar> 
           <Topbanner></Topbanner>
           <Process></Process>
           <Services></Services>
        </div>
    );
};

export default Header;