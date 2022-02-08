import React from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Navbar className='justify-content-center' bg='dark' variant='dark'>
                <Nav>
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
        </div>
    )
}

export default NavBar