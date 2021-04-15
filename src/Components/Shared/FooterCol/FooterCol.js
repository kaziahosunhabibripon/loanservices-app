import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
const FooterCol = (props) => {
    return (
        <div className="col-md-3">
            <h6 className="text-primary"> {props.menuTitle ? props.menuTitle:" "}</h6>
            <ul className="list-unstyled mt-4">
                { 
                    props.menuItems.map((item, index) => <li key={index}>
                        <Link to="#" className="text-secondary"><FontAwesomeIcon className="icon" icon={faChevronRight} />  {item.name}</Link>
                    </li>)
                }
                {props.children && props.children}
            </ul>   
        </div>
    );
};

export default FooterCol;