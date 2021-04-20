import React from 'react';
import LeftSidebar from '../../Shared/LeftSidebar/LeftSidebar';
import { useForm } from "react-hook-form";
const Review = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        fetch('https://dry-tor-15966.herokuapp.com/review', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                console.log(success);
            })
        
       
    }
    return (
        <div className="row m-0 p-0">
            <div className="col-md-2">
                <LeftSidebar></LeftSidebar>
            </div>
            <div className="col-md-1">

            </div>
            <div className="col-md-8 mt-5 p-1" style={{border: '1px solid grey' }}>
                <form onSubmit={handleSubmit(onSubmit)} className="loan-form">
                    <input name="name"{...register("name", { required: true })} placeholder="Your name" />
                    {errors.name && <span className="text-danger">This field is required</span>}
                    <input name="company"{...register("company", { required: true })} placeholder="company name" />
                    {errors.company && <span className="text-danger">This field is required</span>}
                    <input name="description"{...register("description", { required: true })} placeholder="Description"/>
                    {errors.description && <span className="text-danger">This field is required</span>}
                    <button type="submit" className="btn btn-danger mt-5">Submit Review</button>
                </form>
            </div>
        </div>
    );
};

export default Review;