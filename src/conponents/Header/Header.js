import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

import './Header.css';

const Header = () => {
  const [user]= useAuthState(auth);
 
  const HandleSignOut = () => {
    signOut(auth);
  }

    return (
      <>
      <Navbar className='navbar-box' collapseOnSelect expand="lg" sticky='top' bg="light" variant="dark">
<Container>
<Navbar.Brand as={Link}to ="/"><img height={30} src='' alt="" />teacherAcademy</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
<Nav className="me-auto">
  <Nav.Link as={Link}to ="/">Home</Nav.Link>

  <Nav.Link as={Link}to="Courses">Services</Nav.Link>

  <NavDropdown title="Blog" id="collasible-nav-dropdown">
   
    <NavDropdown.Item href="#action/3.4">Blog</NavDropdown.Item>
  </NavDropdown>
</Nav>
<Nav>

  
                             
                                {/* <button onClick={logout} className='btn btn-link text-dark text-decoration-none'>sign out</button> */}
                      { 
                      user ?      
                            <Nav.Link onClick={HandleSignOut}>
                            Sign out
                        </Nav.Link>
                        :
                            <Nav.Link as={Link} to="login">
                            Login
                        </Nav.Link>
                           }
</Nav>
</Navbar.Collapse>
</Container>
</Navbar>

    </>
    );
};

export default Header;