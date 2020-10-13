import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <LinkContainer to="/">
            <Navbar.Brand>exercise authorization</Navbar.Brand>
        </LinkContainer>
      <Nav className="mr-auto">
        <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/member">
            <Nav.Link>Member</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/pcroom">
            <Nav.Link>PC Room</Nav.Link>
        </LinkContainer>
      </Nav>
      <LinkContainer to="/login">
        <Button variant="outline-info">LOGIN</Button>
      </LinkContainer>
      <LinkContainer to="/register">
        <Button variant="outline-info">REGISTER</Button>
      </LinkContainer>
    </Navbar>
  );
};

export default MyNavbar;