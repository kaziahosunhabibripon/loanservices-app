import React, { useEffect, useState } from 'react';
import LoanFunction from '../LoanFunction/LoanFunction';


const LoanServices = () => {
    const [service, setService]= useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data =>setService(data));
    }, [])
    return (
        <div className="row m-0 p-0">
            { 
                service.map(service=><LoanFunction key={service._id} service={service}></LoanFunction>)
            }
        </div>
    );
};

export default LoanServices;