import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {

    const { name, id, price, description, img } = service

    const navigate = useNavigate()
    const handleBook = (id) => {
        navigate(`service/${id}`)
    }
    return (
        <div>
            <div className='service'>
                <img src={img} alt="" />
                <div className='service-detail'>
                    <h3> {name} </h3>
                    <p>price: {price} </p>
                    <p><small>{description}</small></p>
                    <a onClick={() => handleBook(id)} href="#" className="btn btn-primary">BOOK: {name} </a>
                </div>


            </div>
        </div>
    );
};

export default Service;