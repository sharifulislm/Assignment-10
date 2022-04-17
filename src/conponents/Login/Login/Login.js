import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {

    const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

const navigate = useNavigate()
const location = useLocation();
let from = location.state?.from?.pathname || "/";

let HendelError;
const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
  auth
);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      if (error) {
        HendelError = <div>
            <p>Error:{error.message}</p>
          </div>
        
      }
      if (loading) {
        HendelError = <p>Loading...</p>;
      }
      if(user) {
        navigate(from, { replace: true });
      }
     


      const Handelemail = event => {
        const email = event.target.value;
        setEmail(email);
      }
      const HendelPassword = event => {
          const password = event.target.value;
          setPassword(password);
      }
      
      const HandelLoginSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
      }

      

    return (
        <div className='submit-from mt-5'>
            <p className='text-center'>Sign in with your existing account</p>
            <div>
                <form onSubmit={HandelLoginSubmit} action="">
            <label for="fname">Email Address</label> <br/>
            <input onBlur={Handelemail} className='ps-2 pt-1 pb-1' type="text" name="" id="" placeholder='Email'/> <br/>
            <label for="lname">Password   <span className='forgot-password ps-1 mt-2 mb-2 m-0 p-0'>
              
              <button  onClick={async () => {
            await sendPasswordResetEmail(email);
              alert('Sent email');
           }} className='forgot-btn'> Forgot your password?</button>
           
           </span></label> <br/>
           <input onBlur={HendelPassword} className='ps-2 pt-1 pb-1' type="Password" placeholder='Password' id='Password' /> <br/>
           <button className='login mt-3 '>SIGIN IN</button>
           <small className='OR text-center'>OR</small>
           <p text-dengar>{HendelError}</p>
           <p>Don't have an account? <Link to="/Signup"> Create Account</Link></p>
           </form>
                 
            </div>
            
        </div>
    );
};

export default Login;