import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../../App';

import LeftSidebar from '../../Shared/LeftSidebar/LeftSidebar';
import LoanForm from '../LoanForm/LoanForm';

const Book = () => {
    const { name } = useParams();
    
    
    const [serviceName, setServiceName] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/service/${name}`)
            .then(res => res.json())
            .then(data => setServiceName(data[0]))
    }, [name])

    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="row m-0 p-0">
            <div className="col-md-2">
                <LeftSidebar></LeftSidebar>
            </div>
           
            <div className="col-md-10 mt-2 p-1">
                <div className='col-md-4 my-1'>
                    <div className="card card-part shadow rounded">
                        <h4 className="text-uppercase text-center text-success pt-2">{serviceName.name}</h4>
                        <img src={serviceName.imageUrl} className="card-img-top service-image" alt="img" />
                        <div className="card-body">
                            <p className="card-text text-center text-info">{serviceName.description}</p>
                        </div>
                        <button onClick={openModal} className="login-btn" style={{ padding: "10px 25px", backgroundColor: "#6AAEE7", color: "InfoText" }}> Apply Loan </button>
                        <LoanForm modalIsOpen={modalIsOpen} closeModal={closeModal} serviceName={serviceName}></LoanForm>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;