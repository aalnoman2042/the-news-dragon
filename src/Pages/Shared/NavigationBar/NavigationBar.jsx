import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../../../Provider/AuthProvider';
import { useContext } from "react";
const NavigationBar = () => {
    const {user, logout} = useContext(AuthContext)

    const handleLogout = ()=>{
      logout()
      .then()
      .catch(error => console.log(error))
    }
    return (
        <Container>
             <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
           
              <Link to={'/category/0'}>home</Link>
           
            <Nav.Link href="#about">about</Nav.Link>
            <Nav.Link href="#career">career</Nav.Link>
         </Nav>
          <Nav>
          { user &&  
              <FaUserCircle style={{fontSize: "2rem"}}></FaUserCircle>
              }
           
         { user ? 
          <Button onClick={handleLogout} variant="secondary">logout</Button> :
         <Link to="/login">
          <Button variant="secondary">login</Button>
         </Link>
        }
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            
        </Container>
    );
};

export default NavigationBar;