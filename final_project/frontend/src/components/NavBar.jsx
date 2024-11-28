import "../styles/navbar.css";
import Container from "react-bootstrap/Container";
import { Navbar } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [clickHamburger, setClickHamburger] = useState(false);

  const toggleHamburger = () => {
    setClickHamburger(!seClickHamburger);
  };

  return (
    <Navbar className="navbar-container" expand="xl">
      <Container>
        <Row className="navbar-inner">
          <Col md={4} className="navbar-login">
            <Link to="/login">
              <img src="/navbar/user.svg" className="navbar-login" />
            </Link>
          </Col>
          <Col md={4} lg={3}>
            <img
              className="navbar-logo"
              src={
                clickHamburger ? "navbar/logo-click-ham.svg" : "navbar/logo.svg"
              }
            />
          </Col>
          <Col
            lg={12}
            className={clickHamburger ? "hamburger-menu" : "navbar-menu "}
          >
            <ul className={clickHamburger? "hamburger-menu-inner":"navbar-menu-container"}>
              <li>
                <Link to="/" className= {clickHamburger? "sub-heading black navbar-menu-text" : "paragraph white navbar-menu-text"}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/article" className={clickHamburger? "sub-heading black navbar-menu-text" : "paragraph white navbar-menu-text"}>
                  Article
                </Link>
              </li>

              <li>
                <Link to="/shopping" className={clickHamburger? "sub-heading black navbar-menu-text" : "paragraph white navbar-menu-text"}>
                  Shopping
                </Link>
              </li>

              <li>
                <Link to="/order-tracking" className={clickHamburger? "sub-heading black navbar-menu-text" : "paragraph white navbar-menu-text"}>
                  Order Tracking
                </Link>
              </li>

              <li>
                <Link to="/contact-us" className={clickHamburger? "sub-heading black navbar-menu-text" : "paragraph white navbar-menu-text"}>
                  Contact Us
                </Link>
              </li>

              <li>
                <Link to="/cart" className={clickHamburger? "sub-heading black navbar-menu-text" : "paragraph white navbar-menu-text"}>
                  Cart
                </Link>
              </li>

              <li>
                <Link to="/login" className={clickHamburger? "sub-heading black navbar-menu-text" : "paragraph white navbar-menu-text"}>
                  Login/Register
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={4} lg={1} className="hamburger" onClick={setClickHamburger}>
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
