import React from 'react';
import './Experts.css'
import expert1 from '../../../experts/expert-1.jpg'
import expert2 from '../../../experts/expert-2.jpg'
import expert3 from '../../../experts/expert-3.jpg'
import expert4 from '../../../experts/expert-4.jpg'
import expert5 from '../../../experts/expert-5.jpg'
import expert6 from '../../../experts/expert-6.png'
import Expert from '../Expert/Expert';

const experts = [

    { id: 1, name: 'batista', img: expert1 },
    { id: 2, name: 'batista', img: expert2 },
    { id: 3, name: 'batista', img: expert3 },
    { id: 4, name: 'batista', img: expert4 },
    { id: 5, name: 'batista', img: expert5 },
    { id: 6, name: 'batista', img: expert6 },
]


const Experts = () => {
    return (
        <div style={{ width: '92%', margin: 'auto' }} className='row'>
            <h2 className='text-primary text-center'>this is expert {experts.length} </h2>
            {
                experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
            }
        </div>
    );
};

export default Experts;