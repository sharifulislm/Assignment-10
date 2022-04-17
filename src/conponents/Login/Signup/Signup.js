import React from 'react';
import '../Login/Login.css';

const Signup = () => {
    return (
        <div className='submit-from signup mt-5'>
            <h5 className='text-center'>Create a New account</h5>
        <p className='text-center'>Please provide the following details.</p>
        <div>
            <form action="">
        <label for="fname">Email Address</label> <br/>
        <input className='ps-2 pt-1 pb-1' type="text" name="" id="" placeholder='Email'/> <br/>
        <label for="lname">New Password </label> <br/>
       <input className='ps-2 pt-1 pb-1' type="Password" placeholder='New Password' id='Password' /> <br/>
        <label for="lname">Confirm New Password </label> <br/>
       <input className='ps-2 pt-1 pb-1' type="Password" placeholder='Confirm New Password' id='Password' /> <br/>
       <button className='login mt-3 '>SIGNUP</button>
       <small className='OR text-center'>OR</small>
       <p>Already have an account? <a href=""> Login</a></p>
       </form>
             
        </div>
        
    </div>
    );
};

export default Signup;