import React from 'react';

const KidsTeaching = ({service}) => {

    const{id,name,picture,price,documentation,classTime}=service;

 

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

<button  className='btn-chacout'> 218 New Elephant Road,See more </button>


</div>



 </div>
    );
};

export default KidsTeaching;