import React from 'react';
import ServiceInfo from '../ServiceInfo/ServiceInfo';
const serviceInfo = [
    {
        id: 1,
        title: 'Choose Loan Amount',
        description: 'Suspendisse accumsan imperdue ligula dignissim sit amet vestibulum in mollis etfelis.'
    },
    {
        id: 2,
        title: 'Approved Your Loan',
        description: 'Fusce tempor sstibulum varius sem nec mi luctus viverra edcongue lobortis faucibus.'
    },
    {
        id: 3,
        title: 'Get Your Cash',
        description: 'Get your money in minutes simtibulm varius semnec mluctus gue lobortis faucibus.'
    }

]

const Services = () => {
    return (
        <section className="mt-5 p-1">
            <div className="row m-0 p-0 mb-2">
                <div className="col-xl-8 offset-md-2 col-md-8 offset-md-2 col-md-8 col-sm-12 col-12">
                    <div className="mb100 text-center section-title">
                        <h1 className="text-success">Fast &amp; Easy Application Process.</h1>
                        <p className="text-secondary">Suspendisse aliquet varius nunc atcibus lacus sit amet coed portaeri sque mami luctus viveed congue lobortis faucibus.</p>
                    </div>
                </div>
            </div>
            <div className="row m-0 p-0  justify-content-center align-items-center">
                {
                    serviceInfo.map((info, index) => <ServiceInfo key={index} info={info}></ServiceInfo>)
                }
            </div>
        </section>
    );
};

export default Services;