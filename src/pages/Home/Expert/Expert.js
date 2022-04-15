import React from 'react';

const Expert = ({ expert }) => {
    const { img, name } = expert
    return (
        <div id='expert' className="col-lg-4 col-md-6 col-sm-12  g-4">
            <div className='card' style={{ width: '100%' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>

    );
};

export default Expert;