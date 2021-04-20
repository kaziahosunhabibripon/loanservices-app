import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import LeftSidebar from '../../Shared/LeftSidebar/LeftSidebar';
import BookingData from './BookingData';

const BookingList = () => {
    const [order, setOrder] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('https://dry-tor-15966.herokuapp.com/bookingList?email='+loggedInUser.email,{
            method: 'GET',
            headers: {'content-type': 'application/json',
            authorization: `Bearer ${sessionStorage.getItem('token')}`
        }

        })
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])
    
    return (
        <div className="row m-lg m-0 p-0">
            <div className="col-md-2">
                <LeftSidebar></LeftSidebar>
            </div>
            <div className="col-md-9 m-3 p-5 shadow rounded" >
                <table  >
                    <tbody>
                        <tr className="p-1">
                            <th className="p-1 pl-4">Loan Type</th>
                            <th className="p-1 pl-4">Applicant Name</th>
                            <th className="p-1 pl-4">Applicant Email</th>
                            <th className="p-1 pl-4">Phone Number</th>
                            <th className="p-1 pl-4">Gender</th>
                            <th className="p-1 pl-4">Age</th>
                            <th className="p-1 pl-4">Loan Amount</th>
                            <th className="p-1 pl-4">Weight</th>
                        </tr>
                    </tbody>
                </table>
                {
                    order.map(order => <BookingData key={order._id} order={order}>  </BookingData>)
                }
            </div>
        </div>
    );
};

export default BookingList;