import React from 'react';
import { Link } from 'react-router-dom';
import './LeftSidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt, faHome, faLuggageCart, faThLarge, faUserPlus, faUserShield } from '@fortawesome/free-solid-svg-icons'
import { faServicestack } from '@fortawesome/free-brands-svg-icons';

const LeftSidebar = (props) => {
   
    return (
        <div>
            <div className="left-sidebar">
                <Link className="active" to="/"><FontAwesomeIcon icon={faHome} /> &nbsp; Home</Link>
                <Link to="/bookingList"><FontAwesomeIcon icon={faLuggageCart} />&nbsp; Booking List</Link>
                <Link to="/review"><FontAwesomeIcon icon={faCommentAlt} />&nbsp; Review</Link>
                <Link to="/dashboard"><FontAwesomeIcon icon={faUserShield} />&nbsp; Admin</Link>
                <Link to="/dashboard"><FontAwesomeIcon icon={faServicestack} />&nbsp; Services List</Link>
                <Link to="/makeAdmin"><FontAwesomeIcon icon={faUserPlus} />&nbsp; Make Admin</Link>
                <Link to="/manageServices"><FontAwesomeIcon icon={faThLarge} />&nbsp; Manage Services</Link>
            </div>
        </div>
    );
};

export default LeftSidebar;