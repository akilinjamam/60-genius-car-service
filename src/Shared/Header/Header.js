import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../logo/logo.png'
import { Link } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {

    const [user] = useAuthState(auth);
    console.log(user)

    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <>

            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/"> <img style={{ width: '50px', height: '50px' }} src={logo} alt="" />  </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#service">Services</Nav.Link>
                            <Nav.Link href="home#expert">Experts</Nav.Link>
                            <Nav.Link as={Link} to="/map">Map</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>

                            {
                                user && <>

                                    <Nav.Link as={Link} to="/addservice">Add Service</Nav.Link>
                                    <Nav.Link as={Link} to="/manageservice">Manage Service</Nav.Link>
                                    <Nav.Link as={Link} to="/orders">Orders</Nav.Link>

                                </>

                            }
                            {
                                user ?

                                    <Nav.Link onClick={handleSignOut} >
                                        Sign Out
                                    </Nav.Link>

                                    :
                                    <Nav.Link as={Link} to="/login">
                                        Login
                                    </Nav.Link>
                            }

                            {
                                user && <p className='text-white ms-4 mt-2'> {user.displayName}  </p>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <br />

        </>


    );
};

export default Header;

// onClick={handleSignOut}