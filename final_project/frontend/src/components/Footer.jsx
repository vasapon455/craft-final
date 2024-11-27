import "../styles/footer.css";
import Container from "react-bootstrap/Container";

import {Row, Col} from "react-bootstrap";


const Footer = () => {
    return (
        <footer>
            <Container fluid className="footer-container">
            <Row className="footer-inner1">
                <Col lg={6} className="footer-left">
                <p className="sub-heading red">Love Japanese Fashion</p>
                <span className="paragraph white">Follow Us!</span>
                <div className="footer-social-media">
                    <img src="./fb-logo.svg"/>
                    <img src="./ig-logo.svg"/>
                    <img src="./tiktok-logo.svg"/>
                    <img src="./x-logo.svg"/>
                </div>
                </Col> 
                <Col Col lg={6} className="footer-right">
                  <p className="sub-heading white">Vasapon Opaswatanakul</p>
                  <span className="paragraph white ">Address</span>
                  <div className="paragraph white"><p>455/263 ถนนจรัญสนิทวงศ์ ซอย 35 แขวงบางขุนศรี เขตบางกอกน้อย กรุงเทพฯ 10700</p></div>
                </Col>
            </Row>
            <Row style={{textAlign: 'center', display:'flex', flexDirection:'column', gap:'20px'}}>
                <a className="paragraph white underline " href="#top">Return to Top</a>
                <p className="paragraph white">Copyright © 2024 Japan Style Alrights Reserved.</p>
            </Row>
            </Container>
        </footer>
      
    );
  };

  export default Footer;