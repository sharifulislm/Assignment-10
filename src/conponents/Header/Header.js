import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../image/logo.svg1.svg';
import './Header.css';

const Header = () => {
    return (
      <>
      <Navbar className='navbar-box' collapseOnSelect expand="lg" sticky='top' bg="light" variant="dark">
<Container>
<Navbar.Brand as={Link}to ="/"><img height={30} src={logo} alt="" /></Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
<Nav className="me-auto">
  <Nav.Link href="Home#Services">Services</Nav.Link>
  <Nav.Link href="Home#Experts">Experts</Nav.Link>
  <Nav.Link as={Link}to="Courses">Courses</Nav.Link>
  <NavDropdown title="Blog" id="collasible-nav-dropdown">
    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="#action/3.4">Blog</NavDropdown.Item>
  </NavDropdown>
</Nav>
<Nav>

  
                             
                                <button className='btn btn-link text-dark text-decoration-none'>sign out</button>
                            
                            <Nav.Link as={Link} to="login">
                            Login
                        </Nav.Link>
</Nav>
</Navbar.Collapse>
</Container>
</Navbar>

    </>
    );
};

export default Header;