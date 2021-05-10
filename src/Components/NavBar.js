import React from 'react'
import "./MyStyle.css"

 import {Nav,Navbar,Button,Image} from 'react-bootstrap'

const NavBar = () => {
    return (
      <>
        
<Navbar collapseOnSelect expand="lg"  variant="dark">
  <Navbar.Brand href="#home"><Image src="images/LogoSlack1.png"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-dark" />
  <Navbar.Collapse  id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link className="text-dark" href="#">Why Slack?</Nav.Link>
      <Nav.Link className="text-dark" href="#pricing">Pricing</Nav.Link>
      <Nav.Link className="text-dark" href="#pricing">About Us</Nav.Link>
    </Nav>
    <Nav>
      <Button className="btn bg-light text-dark sty d-none d-lg-block"  href="#">Your Workingspace</Button>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      </>
    )
}

export default NavBar
