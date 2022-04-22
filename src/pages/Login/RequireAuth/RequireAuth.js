import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(
        auth)
    const location = useLocation();
    console.log(user)

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }


    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div>
            <h2 className='text-danger'>please verify your Email please</h2>
            <button onClick={async () => {
                await sendEmailVerification();
                toast('Sent email');
            }} >sent verification </button>
            <ToastContainer></ToastContainer>

        </div>
    }


    return children
};

export default RequireAuth;