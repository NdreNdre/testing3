import {Navbar,Container,Nav} from 'react-bootstrap';
import {navLinks} from  "../data/index";
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const NavBar = () => {

  const [ChangeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () =>{
    if(window.scrollY > 10){
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  }

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener('scroll', changeBackgroundColor);
  })

  return (
    <div>
      <Navbar expand="lg" className={ChangeColor ? "color-active" : ""}>
      <Container>
        <Navbar.Brand href="#home" className='fs-3 fw-bold'>CodingNgab</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            {navLinks.map((link) => {
              return (
              <div className="nav-link" key={link.id}>
                <NavLink 
                  to={link.path} 
                  className={({ isActive, isPending }) => 
                    isPending ? "pending" : isActive ? "active" : ""} end>
                    {link.text}
                </NavLink>
              </div>
              );
            })}
          </Nav>

          <div className='text-center'>
            <button className='btn btn-outline-danger rounded-1'>Join With US</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar