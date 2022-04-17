import React from 'react';
import Courses from '../Courses/Courses';
import Home from '../Home/Home';
import Signup from '../Login/Signup/Signup';

const HomePage = () => {
    return (
        <div>
            <Home></Home>
            <Courses></Courses>

            <Signup></Signup>
            
        </div>
    );
};

export default HomePage;