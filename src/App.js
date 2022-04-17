
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Courses from './conponents/Courses/Courses';
import Footer from './conponents/Footer/Footer';
import Header from './conponents/Header/Header';

import HomePage from './conponents/Homepage/HomePage';
import Login from './conponents/Login/Login/Login';
import Signup from './conponents/Login/Signup/Signup';
import NotFound from './conponents/NotFound/NotFound';




function App() {
  return (
    <div className="">
  
  <Header></Header>

      <Routes>
  <Route path='/' element={<HomePage></HomePage>}></Route>
  <Route path='Courses' element={<Courses></Courses>} ></Route>
  <Route path='Login' element={<Login></Login>} ></Route>
  <Route path='Signup' element={<Signup></Signup>} ></Route>

  <Route path='*' element={<NotFound></NotFound>} ></Route>




      </Routes>
      <Footer></Footer>


    



    </div>
  );
}

export default App;
