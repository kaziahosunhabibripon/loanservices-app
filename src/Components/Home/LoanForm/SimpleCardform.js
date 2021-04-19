import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import LoanForm from './LoanForm';


const SimpleCardform = () => {
    const stripe = useStripe();
    const elements = useElements();
 
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);
    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
            console.log(error.message);
        } else {
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);
            console.log(paymentMethod);
        }
    };
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button type="submit" disabled={!stripe}  onClick={openModal} className="login-btn" style={{ padding: "10px 25px", backgroundColor: "#6AAEE7", color: "InfoText" }}> Pay for Loan </button>
                <LoanForm modalIsOpen={modalIsOpen} closeModal={closeModal} paymentSuccess={paymentSuccess}></LoanForm>
            </form>
            {
                paymentError && <p style={{color: 'red'}}>{paymentError}</p>
            }
            {
                paymentSuccess && <p style={{color: 'green'}}Your payment was successful> </p>
            }
        </div>
    );
};
export default SimpleCardform;

