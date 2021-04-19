import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import LeftSidebar from '../../Shared/LeftSidebar/LeftSidebar';


import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardform from '../LoanForm/SimpleCardform';


const stripePromise = loadStripe
    ('pk_test_51IeF0eDsrFiWGbX5mRIm3iCV2OTJRomPOryz0b24h2IrXtiveVKBy26J7B4SVfjDrBilkYm4kWnuLnWHgZhGW8Ok00FyfVh2pP');
const Book = () => {
    const { name } = useParams();
    const [serviceName, setServiceName] = useState([]);
    useEffect(() => {
        fetch(`https://radiant-ravine-86194.herokuapp.com/service/${name}`)
            .then(res => res.json())
            .then(data => setServiceName(data[0]))
    }, [name])

    
    return (
        <div className="row m-0 p-0">
            <div className="col-md-2">
                <LeftSidebar></LeftSidebar>
            </div>
            <div className="col-md-6 mt-5">
                <div className="card card-part shadow rounded">
                    <h4 className="text-uppercase text-center text-success pt-2">{serviceName.name}</h4>
                    <h5 className="text-center text-info"> Please pay loan application fees.</h5>
                    <Elements stripe={stripePromise} serviceName={serviceName}>
                        <SimpleCardform ></SimpleCardform>
                    </Elements>  
                </div>
            </div>   
        </div>
    );
};

export default Book;