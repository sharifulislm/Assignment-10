import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillCaretRight } from "react-icons/ai";
import './KidsTeachin.css';

const KidsTeaching = ({service}) => {

    const{id,name,picture,price,documentation,classTime}=service;
 const navigate = useNavigate()

 const HandleNavigate = ()=> {
    navigate('/KidsDetals')
   
 }
 

    return (
        <div className='col-12 col-md-6 col-lg-4 card-box'>
<div >
    <img className='w-100' src={picture} alt="" />
</div>
<div>
    <h3>{name.slice(0, 17)}</h3>
    <h5>{classTime}</h5>
  
    <p>{documentation}</p>
</div>
<div className='d-flex justify-content-between'>

<button onClick={HandleNavigate} className='btn-chacout-discover'> DISCOVER MORE <AiFillCaretRight></AiFillCaretRight> </button>


</div>



 </div>
    );
};

export default KidsTeaching;