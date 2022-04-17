import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDatials = () => {
    
    const {CoursesId}=useParams();
    console.log(CoursesId);

    fetch('CoursesId')
    .then(res => res.json())
    .then(data => console.log(data));

    return (
        <div>

            <h1>this is prams {CoursesId.length}</h1>
            <Link to="/CheckOut"> <button className='btn btn-primary'> chekout </button> </Link>
            
        </div>
    );
};

export default ServiceDatials;