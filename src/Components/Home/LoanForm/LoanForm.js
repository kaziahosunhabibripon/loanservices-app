import React from 'react';
import { useForm } from "react-hook-form";
import Modal from 'react-modal';
import './LoanForm.css';
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
const LoanForm = ({ modalIsOpen, closeModal,service }) => {
   
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className="row m-0 p-2">
            <Modal 
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <form onSubmit={handleSubmit(onSubmit)} className="loan-form">
                <h3 className="text-info text-center pb-2"> {service.name}</h3>
                    <input name="name"{...register("name", { required: true })} placeholder="Enter your name" />
                    {errors.name && <span className="text-danger">This field is required</span>}
                    <input name="amount"{...register("amount", { required: true })} placeholder="Enter Loan Amount" />
                    {errors.amount && <span className="text-danger">This field is required</span>}
                    <input name="phone"{...register("phone", { required: true })} placeholder="Enter your Phone Number" />
                    {errors.phone && <span className="text-danger">This field is required</span>}
                    <input name="email"{...register("email", { required: true })} placeholder="Enter your email" />
                    {errors.email && <span className="text-danger">This field is required</span>}
                    <button type="submit" className="btn btn-danger ml-1 p-2 m-0 p-0"> Apply</button>
                </form>
            </Modal>
        </div>
    );
};

export default LoanForm;