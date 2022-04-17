import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDatials = () => {
    const {CoursesId}=useParams();

    return (
        <div>

            <h1>this is prams {CoursesId.length}</h1>
            <Link to="/ChekOut"> <button className='btn btn-primary'> chekout </button> </Link>
            
        </div>
    );
};

export default ServiceDatials;