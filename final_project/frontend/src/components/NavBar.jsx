import "../styles/navbar.css";
import Container from "react-bootstrap/Container";
import { Navbar } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showHamburger, setShowHamburger] = useState(false);

  const toggleHamburger = () => {
    setShowHamburger(!setShowHamburger);
  };

  return (
    <Navbar className="navbar-container" expand="xl">
      <Container>
        <Row className="navbar-inner">
          <Col md={4} className="navbar-login">
            <Link to='/login'><img src="./user.svg" className="navbar-login"/></Link>
          </Col>
          <Col md={4} lg={3} >
            <img className="navbar-logo" src="./logo.svg" />
          </Col>
          <Col lg={12} className="navbar-menu">
            <ul>
              <li><Link to="/" className="menu">Home</Link></li>
              <span>|</span>
              <li> <Link to="/blog" className="menu">Blog</Link> </li>
              <span>|</span>
              <li><Link to="/shopping" className="menu">Shopping</Link></li>
              <span>|</span>
              <li><Link to="/order-tracking" className="menu">Order Tracking</Link></li>
              <span>|</span>
              <li><Link to="/contact-us" className="menu">Contact Us</Link></li>
              <span>|</span>
              <li><Link to="/cart" className="menu">Cart</Link></li>
              <span>|</span>
              <li><Link to="/login" className="menu">Login/Register</Link></li>
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
