import React, { useEffect, useState } from 'react';
import LeftSidebar from '../../Shared/LeftSidebar/LeftSidebar';
import Servicelist from './Servicelist';

const ManageServices = () => {
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch('https://dry-tor-15966.herokuapp.com/bookingList')
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])
  
    function handleChangeInput(value){
        
        console.log(value);
    }
    return (
        <div className="row m-0 p-0">
            <div className="col-md-2">
                <LeftSidebar></LeftSidebar>
            </div>
            <div className="col-md-1">

            </div>
            <div className="col-md-8 mt-5 shadow rounded" style={{ border: '1px solid grey' }}>
                <table style={{ borderBottom: '1px solid grey' }}>
                    <tbody>
                        <tr>
                            <th className="p-3">Loan Type</th>
                            <th className="p-3">Applicant Name</th>
                            <th className="p-2">Applicant Email</th>
                            <th className="p-2">Phone Number</th>
                            <th className="p-2">Gender</th>
                            <th className="p-2">Age</th>
                            <th className="p-2">Loan Amount</th>
                            <th className="p-2">Weight</th>
                            <th className="p-2">Status</th>
                        </tr>
                    </tbody>
                </table>
                {
                    order.map(order => <Servicelist key={order._id} order={order}></Servicelist>)
                }
                
            </div>
        </div>
    );
};

export default ManageServices;