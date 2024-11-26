import "../styles/navbar.css";
import Container from "react-bootstrap/Container";
import {Navbar} from "react-bootstrap";
import {Row, Col} from "react-bootstrap";
import { useState } from "react";

const NavBar = () => {

const [showHamburger, setShowHamburger] = useState(false)

const toggleHamburger = ()=>{
  setShowHamburger(!setShowHamburger)
}

  return (
    <Navbar className="navbar-container" expand="xl">
      <Container>
        <Row className="navbar-inner">
          <Col lg={6} className="navbar-logo">
            <img src="./logo.svg" />
          </Col>
          <Col  lg={12}  className="navbar-menu">
            <ul>
              <li>Home | </li>
              <li> Blog | </li>
              <li>Shopping | </li>
              <li>Order Tracking | </li>
              <li>Contact Us | </li>
              <li>Cart | </li>
              <li>Login/Register </li>
            </ul>
          </Col>
          <Col lg={1}><img className="hamburger" src="./hamburger.svg"/></Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavBar;
