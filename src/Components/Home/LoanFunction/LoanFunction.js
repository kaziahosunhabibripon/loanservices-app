import React from 'react';
import './LoanFunction.css';
const LoanFunction = ({ service }) => {
    console.log(service);
    const{imageUrl,description,name} = service;
    return (
        <div className='col-md-4 my-1'>
            <div className="card card-part shadow rounded">
            <h4 className="text-uppercase text-center text-success pt-2">{name}</h4>
                <img src={imageUrl} className="card-img-top service-image" alt="img"/>
                    <div className="card-body">
                        <p className="card-text text-center text-info">{description}</p>         
                    </div>
                </div>
            </div>
    );
};

export default LoanFunction;