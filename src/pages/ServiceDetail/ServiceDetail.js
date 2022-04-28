import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../useServiceDetail';

const ServiceDetail = () => {
    const { serviceId } = useParams()
    const [service] = useServiceDetail(serviceId)
    return (
        <div>
            <h2>this is service details: {service.name} </h2>
            <div className='text-center'>
                <Link to={`/checkout/${serviceId}`}> <button className='btn btn-primary'> Procced Check Out </button> </Link>

            </div>
        </div>
    );
};

export default ServiceDetail;
