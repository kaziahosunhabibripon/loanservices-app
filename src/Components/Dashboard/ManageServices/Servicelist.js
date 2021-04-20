import React, { useState } from 'react';
import './Servicelist.css';


const Servicelist = ({order}) => {
    const [orderStatus, setOrderStatus] = useState('');
    const { age, name, email, gender, phone, service, weight, amount, _id} = order;
    const [orderDelete, setOrderDelete] = useState('');
    const handleDelateService = (_id)=>{
        fetch(`http://localhost:5000/delete/${_id}`,{
            method:"DELETE"
        })
        .then(res=> res.json())
        .then(result => {
            setOrderDelete(result);
        },[])
        
    }
    const handleUpdateService = (_id)=>{
        
    }
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
                    <button onClick={() =>handleUpdateService(_id)} className="login-btn"> Update</button>
                    <button onClick={() =>handleDelateService(_id)} className="login-btn"> Delete</button>
                </li>
            </ul>
        </div>
        
        </div>
    );
};

export default Servicelist;