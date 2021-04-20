import React from 'react';
import { useHistory } from 'react-router-dom';
import './LoanFunction.css';

const LoanFunction = ({ service}) => {
    const history = useHistory();
    const handleAppointmentLoanName = (name) =>{
        history.push(`/book/${name}`);
    }

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
                <button onClick={()=>handleAppointmentLoanName(name)} className="login-btn" style={{margin:"10px 40%"}}> Get Loan </button>           
            </div>
    );
};

export default LoanFunction;