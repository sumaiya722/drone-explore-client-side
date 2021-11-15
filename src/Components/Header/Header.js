import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useContexts from '../hooks/useContexts.js';

const Header = () => {
  const { authInfo } = useContexts();
  const { user,logout } = authInfo;
  const { email,displayName } = user;
    return (
        <>
            {/* <Navbar bg="dark" variant="light">
    <Container>
    <Navbar.Brand className="text-white" as={Link} to='/'>Drone presenting</Navbar.Brand>
    <Nav className="ms-auto">
      <Nav.Link className="text-white" as={NavLink} to="/home">Home</Nav.Link>
      <Nav.Link className="text-white" as={NavLink} to="/dashboard">Dashboard</Nav.Link>
      <Nav.Link className="text-white" as={NavLink} to="/login">Login</Nav.Link>
    </Nav>
    </Container>
            </Navbar> */}
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand className="text-white" as={Link} to='/'><i className="fab fa-earlybirds"></i> Drone World</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
     <Nav className="ms-auto">
    <Nav.Link className="text-white" as={NavLink} to="/home">Home</Nav.Link>
     <Nav.Link className="text-white" as={NavLink} to="/explore">Explore</Nav.Link>
      <Nav.Link className="text-white" as={NavLink} to="/dashboard">Dashboard</Nav.Link>
                {email ? (<>
                  <Nav.Link onClick={logout} className="text-white">Logout</Nav.Link>
                  <Nav.Link className="text-white">{displayName }</Nav.Link>
                {/* <span>{displayName}</span> */}
                </>
                ) :
                  
               ( <Nav.Link className="text-white" as={NavLink} to="/login">Login</Nav.Link>)}
      </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

        </>
    );
};

export default Header;