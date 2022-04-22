import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        const url = 'http://localhost:5000/service';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })


        console.log(data)
    };
    return (
        <div>
            <h2>this is add service</h2>
            <form className='d-flex flex-column w-50 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='type your name' {...register("name")} />
                <textarea className='mb-2' placeholder='type your age' {...register("description")} />
                <input className='mb-2' placeholder='price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='photo' type="text" {...register("img")} />
                <input className='mb-2' type="submit" value="add service" />
            </form>
        </div>
    );
};

export default AddService;