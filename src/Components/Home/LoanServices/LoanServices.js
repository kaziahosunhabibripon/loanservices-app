import React, { useEffect, useState} from 'react';
import LoanFunction from '../LoanFunction/LoanFunction';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const LoanServices = ({ handleDateChange, date }) => {
   
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('https://radiant-ravine-86194.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
  

    return (
        <div className="row m-0 p-0">
            <div className="col-md-9"> 
                <h1 className="card-part text-info text-center">Appointment {date.toDateString()}</h1>
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