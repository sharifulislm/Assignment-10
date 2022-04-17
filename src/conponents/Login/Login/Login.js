import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='submit-from mt-5'>
            <p className='text-center'>Sign in with your existing account</p>
            <div>
                <form action="">
            <label for="fname">Email Address</label> <br/>
            <input className='ps-2 pt-1 pb-1' type="text" name="" id="" placeholder='Email'/> <br/>
            <label for="lname">Password   <span className='forgot-password ps-1 mt-2 mb-2 m-0 p-0'><a href="#"> Forgot your password?</a></span></label> <br/>
           <input className='ps-2 pt-1 pb-1' type="Password" placeholder='Password' id='Password' /> <br/>
           <button className='login mt-3 '>SIGIN IN</button>
           <small className='OR text-center'>OR</small>
           <p>Don't have an account? <a href=""> Create Account</a></p>
           </form>
                 
            </div>
            
        </div>
    );
};

export default Login;