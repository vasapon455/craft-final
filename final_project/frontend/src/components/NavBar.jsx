import "../styles/navbar.css";
import Container from "react-bootstrap/Container";
import { Navbar } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [clickHamburger, setClickHamburger] = useState(false);

  function toggleHamburger(){
    setClickHamburger((value)=>!value)
  }


  return (
    <Navbar className="navbar-container" expand="xl">
      <Container>
        <Row className="navbar-inner">
          <Col md={4} className="navbar-login">
            <Link to="/login">
              <img src="/navbar/user.svg" className="navbar-login" />
            </Link>
          </Col>
          <Col md={4} lg={3} style={{ zIndex: "4" }}>
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
            <ul
              className={
                clickHamburger
                  ? "hamburger-menu-inner"
                  : "navbar-menu-container"
              }
            >
              <li>
                <Link
                  to="/"
                  className={
                    clickHamburger
                      ? "sub-heading black navbar-menu-text"
                      : "paragraph white navbar-menu-text"
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/article"
                  className={
                    clickHamburger
                      ? "sub-heading black navbar-menu-text"
                      : "paragraph white navbar-menu-text"
                  }
                >
                  Article
                </Link>
              </li>

              <li>
                <Link
                  to="/shopping"
                  className={
                    clickHamburger
                      ? "sub-heading black navbar-menu-text"
                      : "paragraph white navbar-menu-text"
                  }
                >
                  Shopping
                </Link>
              </li>

              <li>
                <Link
                  to="/order-tracking"
                  className={
                    clickHamburger
                      ? "sub-heading black navbar-menu-text"
                      : "paragraph white navbar-menu-text"
                  }
                >
                  Order Tracking
                </Link>
              </li>

              <li>
                <Link
                  to="/contact-us"
                  className={
                    clickHamburger
                      ? "sub-heading black navbar-menu-text"
                      : "paragraph white navbar-menu-text"
                  }
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  to="/cart"
                  className={
                    clickHamburger
                      ? "sub-heading black navbar-menu-text"
                      : "paragraph white navbar-menu-text"
                  }
                >
                  Cart
                </Link>
              </li>

              <li>
                <Link
                  to="/login"
                  className={
                    clickHamburger
                      ? "sub-heading black navbar-menu-text"
                      : "paragraph white navbar-menu-text"
                  }
                >
                  Login/Register
                </Link>
              </li>
            </ul>
          </Col>
          <Col
            md={4}
            lg={1}
            className="hamburger"
            onClick={toggleHamburger}
            style={{ zIndex: "4" }}
          >
            {!clickHamburger ? (
              <div className="hamburger-container">
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </div>
            ) : (
              <div className="hamburger-container"  >
                <div className="bar1 change"></div>
                <div className="bar2 change"></div>
                <div className="bar3 change"></div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavBar;
