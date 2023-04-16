import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useGlobalImageObject, useGlobalRoutePathObject } from '../Helper/PathHelper';

const NavbarComponent = () => {
    return (
        <div><Navbar>
            <Container>
                <Navbar.Brand href={useGlobalRoutePathObject.Home} className='navbarTop'>
                    <img
                    src={useGlobalImageObject.HeaderLogo}
                    width="60"
                    height="60"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />
                    <h2 className='navbar-h2'>
                        Biplab's OMDB
                  </h2>
                </Navbar.Brand>
            </Container>
        </Navbar></div>
    )
}

export default NavbarComponent