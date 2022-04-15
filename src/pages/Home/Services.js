import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <br /><br />
            <h2 id='service' className='services-title'>Services</h2>
            <br /> <br />


            <div className="main-services">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>

            <br />
        </div>
    );
};

export default Services;