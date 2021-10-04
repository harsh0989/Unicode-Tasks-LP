import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
const Navbarcomp = () => {
  const style = {
    textDecoration: 'none',
    margin: '0 10px',
    color: '#FFFFFF',
    fontSize: '25px'

  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="left me-auto">
              <NavLink style={style} to="/">Home</NavLink>
              <NavLink style={style} to="/about">About</NavLink>
            </Nav>
            <Nav className="right">
              <NavLink style={style} to="/sign-up">Sign Up</NavLink>
              <NavLink style={style} to="/auth/login">Sign In</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navbarcomp
