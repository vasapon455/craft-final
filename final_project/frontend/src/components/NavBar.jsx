import "../styles/navbar.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap";
import {Row, Col} from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar className="navbar-container" expand="lg">
      <Container>
        <Row>
          <Col>
            <img src="./desktop-logo.png" />
          </Col>
          <Col>
            <ul>
              <li>Home |</li>
              <li>Blog |</li>
              <li>Shopping |</li>
              <li>Order Tracking |</li>
              <li>Contact Us |</li>
              <li>Cart |</li>
              <li>Login/Register |</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavBar;
