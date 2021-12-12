
import React from 'react'
import {Container, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../actions/userActions'

const Header = ({setSearch}) => {

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const userLogin = useSelector(state=> state.userLogin);

  const {userInfo} = userLogin

  const logoutHandler = () => {
      dispatch(logout())
      navigate("/")
  }
    return (
        <Navbar bg="primary" expand="lg" variant="dark" sticky="top" >
        <Container>
    <Navbar.Brand >
      <Link to="/">NoteApp</Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      
      <Nav className="m-auto">

      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e)=>setSearch(e.target.value)}
        />
      </Form>
      </Nav>
      
      {userInfo ? <Nav
        
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link>
          <Link to ="/mynotes">My Notes</Link>
        </Nav.Link>
        <NavDropdown title={userInfo?.name} id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
          <NavDropdown.Item onClick={
            logoutHandler
          }>Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav> : (
        <Nav>
          <Nav.Link>
            <Link to="/login">Login</Link>
          </Nav.Link>
        </Nav>
      )
      }
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Header
