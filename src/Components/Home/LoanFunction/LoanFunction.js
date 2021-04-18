import React, { useState } from 'react';
import LoanForm from '../LoanForm/LoanForm';
import './LoanFunction.css';


const LoanFunction = ({ service, date}) => {
    const [order, setOrder] = useState();
    const handleService = ()=>{
    setOrder(service);
    setOrder(service);
   }
   const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }

    function closeModal(){
      setIsOpen(false);
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
                <button onClick={openModal} className="login-btn" style={{margin:"10px 40%"}}>Get loan</button>
                <LoanForm modalIsOpen={modalIsOpen} closeModal={closeModal} service={service} date={date}></LoanForm>
            </div>
    );
};

export default LoanFunction;