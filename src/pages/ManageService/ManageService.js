import React from 'react';
import useServices from '../useServices';

const ManageService = () => {
    const [services, setServices] = useServices()

    const handleDelete = (id) => {

        const proceed = window.confirm('ARE YOU SURE YOU WANT TO DELETE THE ITEM')
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining)
                })

        }


    }

    return (
        <div className='mx-auto w-50 text-center'>
            <h2>manage your service</h2>
            {
                services.map(service => <div key={service._id}>
                    <div style={{ border: '1px solid green', padding: '10px', margin: '10px', borderRadius: '10px' }}>
                        {service.name}
                    </div>
                    <button onClick={() => handleDelete(service._id)} className='btn btn-primary' >Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageService;