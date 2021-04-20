import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import LeftSidebar from '../../Shared/LeftSidebar/LeftSidebar';
import AddServices from '../AddServices/AddServices';




const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="row m-0 p-0">
            <div className="col-md-2">
                <LeftSidebar></LeftSidebar>
            </div>
            <div className="col-md-1">

            </div>
            <div className="col-md-8 mt-2 p-1">
                <AddServices></AddServices>
            </div>
        </div>
    );
};

export default Dashboard;