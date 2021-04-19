import React from 'react';
import './BookingList.css';
const BookingData = ({order}) => {
    const {age, name, email,gender, phone,service, weight, amount}= order;
    return (
        <div className="m-0">
            <ul className="d-flex list-unstyled m-2 p-2 oder-data">
                <li >{service}</li>
                <li >{name}</li>
                <li >{email}</li>
                <li >{phone}</li>
                <li >{gender}</li>
                <li >{age}</li>
                <li>{amount}</li>
                <li >{weight}</li>
            </ul>
        </div>
    );
};

export default BookingData;