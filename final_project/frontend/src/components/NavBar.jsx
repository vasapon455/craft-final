import "../styles/navbar.css";
import Container from "react-bootstrap/Container";
import { Navbar } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";

const NavBar = () => {
  const [showHamburger, setShowHamburger] = useState(false);

  const toggleHamburger = () => {
    setShowHamburger(!setShowHamburger);
  };

  return (
    <Navbar className="navbar-container" expand="xl">
      <Container>
        <Row className="navbar-inner">
          <Col md={4} >
            <img src="./user.svg" className="navbar-login"/>
          </Col>
          <Col md={4} lg={6} >
            <img className="navbar-logo" src="./logo.svg" />
          </Col>
          <Col lg={12} className="navbar-menu">
            <ul>
             
              <li>Home</li>
              <span >|</span>
              <li> Blog </li>
              <span>|</span>
              <li>Shopping</li>
              <span>|</span>
              <li>Order Tracking</li>
              <span>|</span>
              <li>Contact Us</li>
              <span>|</span>
              <li>Cart</li>
              <span>|</span>
              <li>Login/Register</li>
            </ul>
          </Col>
          <Col md={4} lg={1} className="hamburger">
            <div className="hamburger-container">
              <div className="hamburger-part"></div>
              <div className="hamburger-part"></div>
              <div className="hamburger-part"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavBar;
