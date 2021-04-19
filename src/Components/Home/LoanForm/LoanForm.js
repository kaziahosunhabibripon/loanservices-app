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
const LoanForm = ({ modalIsOpen, closeModal,name,date }) => {
   
    const { register, handleSubmit, formState: { errors }, loanData } = useForm();
    const onSubmit = data => {
        const loanData = {
            service: data.name,
            date: data.date
        }
        console.log(data, loanData);
        closeModal();
    };
//    const [modalIsOpen,setIsOpen] = useState(false);
//     function openModal() {
//       setIsOpen(true);
//     }

//     function closeModal(){
//       setIsOpen(false);
//     }
    return (
        <div className="row m-0 p-2">
            <Modal 
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <form onSubmit={handleSubmit(onSubmit)} className="loan-form">
                <h3 className="text-info text-center pb-2"> </h3>
                <h6 className="text-secondary text-center"> {date}</h6>
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
                            <select className="form-control" name="gender" {...register("gender",{ required: true })}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-4">
                            <input name="age" {...register("age", { required: true })}  placeholder="Your Age" className="form-control" />
                            {errors.age && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-4">
                            <input  name="weight" {...register( "weight", { required: true })} placeholder="Weight" className="form-control" />
                            {errors.weight && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>
                    <button type="submit" className="btn btn-danger ml-1 p-2 m-0 p-0"> Apply</button>
                </form>
            </Modal>
        </div>
    );
};

export default LoanForm;