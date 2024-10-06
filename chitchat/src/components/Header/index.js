// Filename - App.js

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default function Header() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="me-auto">
            ChitChat
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#Login">Login</Nav.Link>
              <Nav.Link href="#SignUp">Sign Up</Nav.Link>
              <NavDropdown title="Settings" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#web/3.1">
                  {" "}
                  Manage Profile{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="#web/3.2"> Security </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
