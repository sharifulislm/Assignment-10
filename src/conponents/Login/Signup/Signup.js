import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import '../Login/Login.css';
import auth from '../../firebase.init';



const Signup = () => {
    const navigate = useNavigate();
  
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [confirmpass,setConfirmpass]=useState('');

let HendelError;
const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  if (error) {
    HendelError = <div>
        <p>Error:{error.message}</p>
      </div>
    
  }
  if (loading) {
    HendelError = <p>Loading...</p>;
  }
  if(user){
    navigate("/HomePage");

}
  


const Handelemail = event => {
  const email = event.target.value;
  setEmail(email);
}
const HendelPassword = event => {
    const password = event.target.value;
    setPassword(password);
}
const HandelConfirmPassword = event => {
    const ConfiramPassword = event.target.value;
    setConfirmpass(ConfiramPassword);
}
const HandleSubmit =event => {
    event.preventDefault();
    createUserWithEmailAndPassword(email, password)
}



    return (
        <div className='submit-from signup mt-5'>
            <h5 className='text-center'>Create a New account</h5>
        <p className='text-center'>Please provide the following details.</p>
        <div>
            <form onSubmit={HandleSubmit} action="">
        <label for="fname">Email Address</label> <br/>
        <input onBlur={Handelemail} className='ps-2 pt-1 pb-1' type="text" name="" id="" placeholder='Email'/> <br/>
        <label for="lname">New Password </label> <br/>
       <input onBlur={HendelPassword} className='ps-2 pt-1 pb-1' type="Password" placeholder='New Password' id='Password' /> <br/>
        <label for="lname">Confirm New Password </label> <br/>
       <input onBlur={HandelConfirmPassword} className='ps-2 pt-1 pb-1' type="Password" placeholder='Confirm New Password' id='Password' /> <br/>
       <button className='login mt-3 '>SIGNUP</button>
       <small className='OR text-center'>OR</small>
       {HendelError}
       <p>Already have an account? <Link to="/Login">Login</Link> </p>
       </form>
             
        </div>
        
    </div>
    );
};

export default Signup;