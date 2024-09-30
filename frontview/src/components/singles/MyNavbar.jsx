import React from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import logo from "../../assets/my_logo3.svg";
import "../../styles/navbar.scss";
import resume from "../../assets/resume.pdf";

function MyNavbar() {
  return (
    <Navbar
      expand="lg"
      className="bg-tertiary custom-navbar"
      variant="tertiary"
    >
      <Container fluid>
        <Navbar.Brand className="navbar-brand" href="#" id="home">
          <img src={logo} alt="my logo" width="65px" height="auto" />
        </Navbar.Brand>
        <Navbar.Toggle
          className="navbar-toggler"
          aria-controls="navbarScroll"
        />

        <Navbar.Collapse className="navbar-collapse" id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "200px" }}
            navbarScroll
          >
            <Nav.Link className="nav-link" href="#home">
              Home
            </Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item className="dropdownItems" href="#services">
                Web Application
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdownItems" href="#services">
                Mobile App
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdownItems" href="#services">
                UI/UX Design
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdownItems" href="#services">
                Tech Consultancy
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>

          <Button
            className="download-button"
            variant="tertiary"
            href={resume} // Update with your file's path download
            disabled
          >
            Download CV
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
