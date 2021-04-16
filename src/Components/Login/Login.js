import React from 'react';
import Footer from '../Shared/Footer/Footer';
import './Login.css';
import { useForm } from "react-hook-form";
import Sidebar from '../Shared/Sidebar/Sidebar';
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);

    };

    return (
        <div className="login-container">
            <div className="row m-0 p-0 pt-5">
                <div className="col-md-1">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-4 login-form">
                    <h1 className="text-center text-success">Login Form</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="text-left">
                            Email:
                        </label>
                        <input type="text" {...register("email", { required: true })} placeholder="Enter your email..." />
                        {errors.email && <span className="text-danger">This field is required</span>}
                        <br />
                        <label className="text-left">
                            Password:
                        </label>
                        <input type="password" {...register("password", { required: true })} placeholder="Enter your password..." />
                        {errors.password && <span className="text-danger">This field is required</span>}
                        <br />
                        <button className="login-button" type="submit"><span>Login</span></button>
                    </form>
                    <h2>Or</h2>
                    <button className="login-button"><span>Continue with google</span></button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;