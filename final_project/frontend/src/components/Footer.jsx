import "../styles/footer.css";
import Container from "react-bootstrap/Container";

import {Row, Col} from "react-bootstrap";


const Footer = () => {
    return (
        <footer>
            <Container fluid className="footer-container">
            <Row className="footer-inner1">
                <Col lg={6} className="footer-left">
                <p className="footer-copy">Love Japanese Fashion</p>
                <span className="footer-sub">Follow Us!</span>
                <div className="footer-social-media">
                    <img src="./fb-logo.svg"/>
                    <img src="./ig-logo.svg"/>
                    <img src="./tiktok-logo.svg"/>
                    <img src="./x-logo.svg"/>
                </div>
                </Col> 
                <Col Col lg={6} className="footer-right">
                  <p className="footer-name">Vasapon Opaswatanakul</p>
                  <span className="footer-address ">Address</span>
                  <div className="footer-address-copy"><p>455/263 ถนนจรัญสนิทวงศ์ ซอย 35 แขวงบางขุนศรี เขตบางกอกน้อย กรุงเทพฯ 10700</p></div>
                </Col>
            </Row>
            <Row>
                <p>Copyright © 2024 Japan Style Alrights Reserved.</p>
            </Row>
            </Container>
        </footer>
      
    );
  };

  export default Footer;