import React from 'react';
import LeftSidebar from '../../Shared/LeftSidebar/LeftSidebar';
import { useForm } from "react-hook-form";
const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);   
    };
    return (
        <div className="row m-0 p-0">
            <div className="col-md-2">
                <LeftSidebar></LeftSidebar>
            </div>
            <div className="col-md-1">

            </div>
            <div className="col-md-8 mt-2 p-1">
                <div className="addServices p-5">
                    <h4 className="text-center text-success">Make Admin</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="email"> Email</label>
                        <br/>
                        <input name="email"{...register("email", { required: true })} placeholder="Email" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                        <button type="submit" className="btn btn-danger ml-1 p-2 m-0 p-0"> Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;