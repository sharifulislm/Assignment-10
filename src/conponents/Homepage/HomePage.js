import React from 'react';
import Courses from '../Courses/Courses';
import Home from '../Home/Home';
import KidsService from '../KidsService/KidsService';


const HomePage = () => {
    return (
        <div>
            <Home></Home>
            <Courses></Courses>
            <KidsService></KidsService>

            
        </div>
    );
};

export default HomePage;