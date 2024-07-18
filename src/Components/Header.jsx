import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinearGradient } from 'react-text-gradients'
import "../Css/Header.css"

function Header() {
 
  return (
   <>
   <Navbar expand="lg" className=" px-lg-5" style={{backgroundColor:"black"}}>
      <Container fluid>
        <Navbar.Brand href="#home" className='text-light fs-2 fw-bold' ><LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>Jaseem.</LinearGradient></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav.Link href="#home" className='text-light me-4 nav-link ' >Home</Nav.Link>
          <Nav.Link className='me-4 text-light'>About</Nav.Link>
          <Nav.Link className='me-4 text-light'>Service</Nav.Link>
          <Nav.Link className='me-5 text-light'>Portfolio</Nav.Link>
          <button className="btn rounded-5 px-3 text-light custom-button"  >Contact Us</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
   </>
  )
}

export default Header