import React, { useContext, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import './Login.css';
import { useForm } from "react-hook-form";
import Sidebar from '../../Shared/Sidebar/Sidebar';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        console.log(data);
        

    };
    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email };
                setLoggedInUser(signedInUser);
                history.replace(from);
                storeAuthToken();
               
                
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
          .then(function (idToken) {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
          }).catch(function (error) {
            
          });
      }

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
                    <button onClick={handleGoogleSignIn} className="login-button"><span>Continue with google</span></button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;