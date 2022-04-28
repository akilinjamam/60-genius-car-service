import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import auth from '../../firebase.init';

const CheckOut = () => {

    const [user] = useAuthState(auth);
    if (user) {
        console.log(user)
    }

    const [service, setService] = useState({})
    useEffect(() => {
        fetch(`https://fierce-plains-73609.herokuapp.com/checkout/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const { serviceId } = useParams()

    const handlePlaceOrder = (event) => {
        event.preventDefault();
        const order = {
            email: user.email,
            name: user.displayName,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }

        axios.post('https://fierce-plains-73609.herokuapp.com/order', order)
            .then(response => {
                console.log(response)
                const { data } = response

                if (data.insertedId) {
                    toast('your order is booked');
                    event.target.reset()
                }

            })
    }

    return (
        <div className='w-50 mx-auto '>
            <ToastContainer></ToastContainer>
            <h2 className='text-center'  >checkout : {service.name} </h2>

            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-3' type="text" value={user?.displayName} name='name' placeholder='type your name' readOnly required /> <br />
                <input className='w-100 mb-3' type="email" value={user?.email} name='email' placeholder='type your email' readOnly required /> <br />
                <input className='w-100 mb-3' type="text" name='service' value={service.name} readOnly required /> <br />
                <input className='w-100 mb-3' type="text" name='address' placeholder='type your address' required /> <br />
                <input className='w-100 mb-3' type="text" name='phone' placeholder='type your phone' required /> <br />
                <input className='w-100 mb-3 btn btn-primary' type="submit" value="place order" />
            </form>
        </div>
    );
};

export default CheckOut;