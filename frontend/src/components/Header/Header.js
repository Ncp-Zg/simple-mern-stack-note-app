
import React from 'react'
import {Container, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap"

const Header = () => {
    return (
        <Navbar bg="primary" expand="lg" variant="dark" sticky="top" >
        <Container>
    <Navbar.Brand href="#">NoteApp</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      
      <Nav className="m-auto">

      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
      </Form>
      </Nav>
      
      <Nav
        
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">My Notes</Nav.Link>
        <NavDropdown title="Name" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Header
