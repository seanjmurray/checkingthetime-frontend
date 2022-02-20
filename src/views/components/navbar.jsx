import React from "react";
// Bootstrap
import { Navbar, Nav } from "react-bootstrap";
// React Router
import { LinkContainer } from "react-router-bootstrap";
import { Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar className="justify-content-center" bg="dark" variant="dark">
        <Navbar.Brand>Checking the Time</Navbar.Brand>
        <Nav variant="pills">
          <Nav.Item>
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          {/* <NavItem>
                        <LinkContainer to='feed'>
                            <NavLink>Feed</NavLink>
                        </LinkContainer>
                    </NavItem> */}
          <Nav.Item>
            <LinkContainer to="profile">
              <Nav.Link>Profile</Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Nav>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default NavBar;
