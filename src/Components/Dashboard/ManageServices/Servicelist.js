import React, { useState } from 'react';
import './Servicelist.css';


const Servicelist = ({order}) => {
    const [orderStatus, setOrderStatus] = useState('');
    const { age, name, email, gender, phone, service, weight, amount, _id} = order;
    const [orderDelete, setOrderDelete] = useState('');
    const handleDelateService = (_id)=>{
        fetch(`https://radiant-ravine-86194.herokuapp.com/delete/${_id}`,{
            method:"DELETE"
        })
        .then(res=> res.json())
        .then(result => {
            setOrderDelete(result);
        },[])
        
    }
   
    const updateStaus = (_id) =>{
        const update = document.getElementById('update').value;

        fetch(`https://radiant-ravine-86194.herokuapp.com/update/${_id}`,{
            method:"PATCH",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(update)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('update');
        })

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
                        <select name="orderStatus" id="update" onChange={(e)=>{
                            const status= e.target.value;
                            setOrderStatus(status);
                        }}>
                            <option value="pending"> Pending</option>
                            <option value="ongoing"> Ongoing</option>
                            <option value="done"> Done</option>
                        </select>
                    </span>
                    <button onClick={(e) =>handleUpdateService(_id)} className="login-btn"> Update</button>
                    <button onClick={() =>handleDelateService(_id)} className="login-btn"> Delete</button>
                    <button className="btn btn-danger" onClick={(e)=>updateStaus(order,e)}>Send</button>
                </li>
            </ul>
        </div>
        
        </div>
    );
};

export default Servicelist;