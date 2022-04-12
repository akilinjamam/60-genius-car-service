import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../logo/logo.png'

const Header = () => {
    return (
        <div>
            <div>
                <>

                    <Navbar bg="primary" variant="dark">
                        <Container>
                            <Navbar.Brand href="#home"> <img style={{ width: '50px', height: '50px' }} src={logo} alt="" /> </Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>

                    <br />

                </>
            </div>
        </div>
    );
};

export default Header;