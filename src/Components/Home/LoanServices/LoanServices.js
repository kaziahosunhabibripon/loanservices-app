import React, { useEffect, useState} from 'react';
import LoanFunction from '../LoanFunction/LoanFunction';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ReviewUser from './ReviewUser';

const LoanServices = ({ handleDateChange, date }) => {
   
    const [service, setService] = useState([]);
    const [reviewUser, setReview] = useState([]);

    useEffect(() => {
        fetch('https://dry-tor-15966.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    useEffect(() => {
        fetch('https://dry-tor-15966.herokuapp.com/reviewUser')
            .then(res => res.json())
            .then(data => setReview(data));
    }, [])
  

    return (
        <div className="row m-0 p-0">
            <div className="col-md-9"> 
                <h1 className="text-info text-center">Appointment {date.toDateString()}</h1>
               {
                   reviewUser.map(review=><ReviewUser key={review._id} review={review}> 
                   </ReviewUser>)
               }

            </div>
            <div className="col-md-3 py-5 mt-2">
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>
            <h1 className="text-center text-info pb-2">Our Services</h1>
            <h6 className="text-center text-secondary p-2">Fast services available to get loan easily.</h6>
            {
                service.map(service => <LoanFunction key={service._id} service={service} date={date}></LoanFunction>)
            }
        </div>
    );
};

export default LoanServices;