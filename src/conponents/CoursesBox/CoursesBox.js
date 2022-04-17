import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import './CoursesBox.css';


const CoursesBox = ({courses}) => {

const Navigate = useNavigate()
       
    const{id,name,picture,price,documentation}=courses;

    

    const ShowDetails = id=> {
        

        Navigate(`/#ShowDetails${id}`)
        }



  

    return (
 <div className='col-12 col-md-6 col-lg-3 card-box'>
<div >
    <img className='w-100' src={picture} alt="" />
</div>
<div>
    <h3>{name.slice(0, 17)}</h3>
  
    <p>{documentation.slice(0, 100)}...</p>
</div>
<div className='d-flex justify-content-between'>

<button onClick={()=> ShowDetails(id)} className='btn-chacout'>Course</button>

<h5 className='price'>Price: {price}$</h5>
</div>



 </div>
 
    );
};

export default CoursesBox;