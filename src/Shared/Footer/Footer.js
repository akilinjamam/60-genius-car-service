import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div style={{ height: '130px' }} className='bg-dark'>
            <h2 className='text-center mt-5 text-white pt-5' > {year} </h2>
        </div>
    );
};

export default Footer;