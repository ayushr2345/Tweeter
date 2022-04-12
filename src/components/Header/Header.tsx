import React from "react";
import "./Header.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <div>
      <Navbar className="custom-navbar" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="heading-navbar">Tweeter</Navbar.Brand>
          </LinkContainer>

          <Nav className="ms-auto">
            <LinkContainer to="/about">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
