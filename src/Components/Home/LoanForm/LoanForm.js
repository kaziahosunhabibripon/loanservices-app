import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Modal from 'react-modal';

import './LoanForm.css';

import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root');

const stripePromise = loadStripe('pk_test_51IeF0eDsrFiWGbX5mRIm3iCV2OTJRomPOryz0b24h2IrXtiveVKBy26J7B4SVfjDrBilkYm4kWnuLnWHgZhGW8Ok00FyfVh2pP');
const LoanForm = ({ modalIsOpen, closeModal, paymentSuccess }) => {
    const { name } = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.service = serviceName.name;
        data.paymentSuccess = paymentSuccess
        fetch('https://radiant-ravine-86194.herokuapp.com/loanOrder', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert("Loan Application successfully submitted.");
                    closeModal();

                }
            })
        console.log(data);
        

    };
    const [serviceName, setServiceName] = useState([]);
    useEffect   (() => {
        fetch(`https://radiant-ravine-86194.herokuapp.com/service/${name}`)
            .then(res => res.json())
            .then(data => setServiceName(data[0]))
    }, [name])
    return (
        <div className="col-md-6 ml-3">
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal">
                    <form onSubmit={handleSubmit(onSubmit)} className="loan-form">
                        <h3 className="text-info text-center pb-2">{serviceName.name} </h3>
                        <h3 className="text-info text-center pb-2"> {paymentSuccess}</h3>

                        <input name="name"{...register("name", { required: true })} placeholder="Enter your name" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                        <input name="amount"{...register("amount", { required: true })} placeholder="Enter Loan Amount" />
                        {errors.amount && <span className="text-danger">This field is required</span>}
                        <input name="phone"{...register("phone", { required: true })} placeholder="Enter your Phone Number" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                        <input name="email"{...register("email", { required: true })} placeholder="Enter your email" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                        <div className="form-group row">
                            <div className="col-4 mt-2">
                                <select className="form-control" name="gender" {...register("gender", { required: true })}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                                {errors.gender && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="col-4">
                                <input name="age" {...register("age", { required: true })} placeholder="Your Age" className="form-control" />
                                {errors.age && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="col-4">
                                <input name="weight" {...register("weight", { required: true })} placeholder="Weight" className="form-control" />
                                {errors.weight && <span className="text-danger">This field is required</span>}
                            </div>
                        </div>
                        <button type="submit" className="btn btn-danger mt-5"> Confirm Application</button>
                    </form>
                </Modal>
        </div>
    );
};

export default LoanForm;