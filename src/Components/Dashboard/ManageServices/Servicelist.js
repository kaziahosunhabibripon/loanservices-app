import React, { useState } from 'react';
import './Servicelist.css';


const Servicelist = ({order}) => {
    const [orderStatus, setOrderStatus] = useState('');
    const { age, name, email, gender, phone, service, weight, amount } = order;
    
    return (
        <div>
            <div className="row m-0 p-0">
            <ul className="d-flex list-unstyled  oder-status">
                <li>
                    <span>{service} </span> <span >{name} </span> <span > {email} </span>
                    <span> {phone} </span><span > {gender}</span> <span > {age}</span>
                    <span > {amount}</span> <span >{weight}</span> <span>{orderStatus}</span>
                    <span>
                        <select name="orderStatus" id="" onChange={(e)=>{
                            const status= e.target.value;
                            setOrderStatus(status);
                        }}>
                            <option value="pending"> Pending</option>
                            <option value="ongoing"> Ongoing</option>
                            <option value="done"> Done</option>
                        </select>
                    </span>
                </li>
            </ul>
        </div>
        
        </div>
    );
};

export default Servicelist;