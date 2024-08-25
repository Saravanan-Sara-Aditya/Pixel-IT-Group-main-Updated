import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../assets/images/Pixel_Logo.png";

function TopNavBar() {
    const [navbarExpanded, setNavbarExpanded] = useState(false);

    const closeNavbar = () => {
        if (navbarExpanded) {
            setNavbarExpanded(false);
        }
    };

    const isMobile = window.innerWidth <= 767;
    return (

<Navbar
  expand = "lg"
  expanded = { navbarExpanded }
  onToggle = {() => setNavbarExpanded(!navbarExpanded)
}
style = {{
    background: isMobile ? 'rgba(255, 255, 255, 0.8)' : 'none',
        backdropFilter: isMobile ? 'blur(10px)' : 'none',
            position: 'absolute',
                top: isMobile ? '0' : '0',
                    zIndex: '1000',
                        width: '100%',
                            margin: isMobile ? '0' : '10px',
  }}
>
    <Container>
        <Navbar.Brand className="pt-1 pb-1" href="/">
            <img src={logo} width="65px" alt="Logo" />
            <h3 style={{ color: "#fff" }} className='d-inline none anton-regular ms-2'>Pixel IT Group</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
                <Nav.Link className="fw-semibold glow" href="/" onClick={closeNavbar}>
                    <span style={{ color: "#fff" }} className="glow">Home</span>
                </Nav.Link>
                <Nav.Link className="fw-semibold glow" href="#about" onClick={closeNavbar}>
                    <span style={{ color: "#fff" }} className="glow">About us</span>
                </Nav.Link>
                <Nav.Link className="fw-semibold glow" href="#services" onClick={closeNavbar}>
                    <span style={{ color: "#fff" }} className="glow">Services</span>
                </Nav.Link>
                <Nav.Link className="fw-semibold glow" href="#our_clients" onClick={closeNavbar}>
                    <span style={{ color: "#fff" }} className="glow">Our Clients</span>
                </Nav.Link>
                <Nav.Link className="fw-semibold glow" href="#contact_us" onClick={closeNavbar}>
                    <span style={{ color: "#fff" }} className="glow">Contact Us</span>
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
        </Navbar >
    );
}

export default TopNavBar;
