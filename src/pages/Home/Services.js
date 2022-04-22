import React, { useEffect, useState } from 'react';
import useServices from '../useServices';
import Service from './Service/Service';
import './Services.css'

const Services = () => {

    const [services] = useServices();


    return (
        <div>
            <br /><br />
            <h2 id='service' className='services-title'>Services</h2>
            <br /> <br />


            <div className="main-services">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>

            <br />
        </div>
    );
};

export default Services;