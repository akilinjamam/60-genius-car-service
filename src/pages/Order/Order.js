import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../axiosPrivate';
import auth from '../../firebase.init';

const Order = () => {

    const [order, setOrder] = useState([])
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    /* 
    -------------------------------------------------------------------------
    // const email = user.email
        // const url = `https://fierce-plains-73609.herokuapp.com/order?email=${email}`;
        // const { data } = await axios.get(url, {
        //     headers: {
        //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
        //     }
        // });
        // setOrder(data)
    --------------------------------------------------------------------------
    */

    useEffect(() => {


        const getOrder = async () => {
            try {

                const email = user?.email
                const url = `https://fierce-plains-73609.herokuapp.com/order?email=${email}`;
                const { data } = await axiosPrivate.get(url);
                setOrder(data)


            }
            catch (error) {
                console.log(error.messagge)
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
        getOrder()

    }, [user])


    return (
        <div>
            <h2 style={{ color: 'green' }} className='text-center'>  Order: {order.length} </h2>

            <div className='text-center text-primary border border-black w-50 mx-auto rounded p-4'>
                {
                    order.map(theOrder => <div key={theOrder._id}>
                        <p> {theOrder.email} : {theOrder.service}  </p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Order;