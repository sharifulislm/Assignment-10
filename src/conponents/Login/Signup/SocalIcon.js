import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './SocalIcon.css';

const SocalIcon = () => {


    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);



    return (
        <div>
           
            <button onClick={() => signInWithGoogle()} className='text-center icon-btn'><FcGoogle></FcGoogle> Google Sign in</button>
        </div>
    );
};

export default SocalIcon;