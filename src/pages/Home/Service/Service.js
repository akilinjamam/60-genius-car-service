import React from 'react';
import './Service.css'

const Service = ({ service }) => {

    const { name, price, description, img } = service
    return (
        <div>
            <div className='service'>
                <img src={img} alt="" />
                <div className='service-detail'>
                    <h3> {name} </h3>
                    <p>price: {price} </p>
                    <p><small>{description}</small></p>
                    <button><p>Book: {name} </p></button>
                </div>


            </div>
        </div>
    );
};

export default Service;