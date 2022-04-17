import React from 'react';
import { FaFacebook } from "react-icons/fa";
import {AiFillGooglePlusCircle} from "react-icons/ai";
import {AiFillTwitterCircle} from "react-icons/ai";
import './Footer.css';


const Footer = () => {
    return (
        <div className='container mb-5'>
            <div className='aline-border'></div>

            <div className='d-flex justify-content-between mt-5 mt-5 align-items-center'>
             <div className='pera'><p>© Copyright teacherAcademy2022 All Rights Reserved</p></div>

             <div className='socal-icon'>
               <FaFacebook></FaFacebook>
               <AiFillGooglePlusCircle></AiFillGooglePlusCircle>
               <AiFillTwitterCircle></AiFillTwitterCircle>



             </div>


            </div>
        </div>
    );
};

export default Footer;