import React from 'react';
import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Outlet } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Navbar className='justify-content-center' bg='dark' variant='dark'>
                    <NavbarBrand>Checking the Time</NavbarBrand>
                <Nav variant='pills'>
                    <NavItem>
                        <LinkContainer to='/'>
                            <NavLink>Home</NavLink>
                        </LinkContainer>
                    </NavItem>
                    <NavItem>
                        <LinkContainer to='feed'>
                            <NavLink>Feed</NavLink>
                        </LinkContainer>
                    </NavItem>
                    <NavItem>
                        <LinkContainer to='profile'>
                            <NavLink>Profile</NavLink>
                        </LinkContainer>
                    </NavItem>
                </Nav>
        </Navbar>
        <Outlet />
        <Navbar fixed='bottom' className='justify-content-center' bg='dark' variant='dark'>
            <Navbar.Text>&copy; 2022 <a href='https://github.com/seanjmurray'>Sean Murray</a></Navbar.Text>
        </Navbar>
        </div>
    )
}

export default NavBar