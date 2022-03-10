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
        <LinkContainer to="/">
          <Navbar.Brand>Checking the Time</Navbar.Brand>
        </LinkContainer>
        <Nav variant="">
          <Nav.Item>
            <LinkContainer to="profile">
              <Nav.Link>Profile</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="upload">
              <Nav.Link>Upload</Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Nav>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default NavBar;
