import React from 'react';
import './ServiceInfo.css';
const ServiceInfo = ({ info }) => {
    return (
        <div className="col-md-3 shadow rounded services-div">
            <div className="text-div p-1 mb-1">
                <div className="circle"><span className="number">{info.id}</span></div>
                <h3 className="pt-2 mt-4 text-info">{info.title}</h3>
                <p>{info.description}</p>
            </div>
        </div>
    );
};

export default ServiceInfo;