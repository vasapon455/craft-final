import "../styles/footer.css";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {Row, Col} from "react-bootstrap";


const Footer = () => {

    const facebookLink = "https://www.facebook.com"
    const InstagramLink = "https://www.instagram.com/"
    const xLink = "https://x.com/?lang=th"
    const tikTokLink = "https://www.tiktok.com/explore"
    const address = "455/263 ถนนจรัญสนิทวงศ์ ซอย 35 แขวงบางขุนศรี เขตบางกอกน้อย กรุงเทพฯ 10700"
    const name = "Vasapon Opaswatanakul"
    const year = new Date()
    const thisYear = year.getFullYear()


    return (
        <footer>
            <Container fluid className="footer-container">
            <Row className="footer-inner1">
                <Col lg={6} className="footer-left">
                <p className="sub-heading red">Love Japanese Fashion</p>
                <span className="paragraph white">Follow Us!</span>
                <div className="footer-social-media">
                    <Link to= {facebookLink}>
                    <img src="/footer/fb-logo.svg"/>
                    </Link>
                    <Link to ={InstagramLink}>
                    <img src="/footer/ig-logo.svg"/>
                    </Link>
                    <Link to={tikTokLink}>
                    <img src="/footer/tiktok-logo.svg"/>
                    </Link>
                    <Link to={xLink}>
                    <img src="/footer/x-logo.svg"/>
                    </Link>
                </div>
                </Col> 
                <Col Col lg={6} className="footer-right">
                  <p className="sub-heading white">{name}</p>
                  <span className="paragraph white underline">Address</span>
                  <div className="paragraph white"><p>{address}</p></div>
                </Col>
            </Row>
            <Row style={{textAlign: 'center', display:'flex', flexDirection:'column', gap:'20px'}}>
                <a className="paragraph white underline" href="#top">Return to Top</a>
                <p className="paragraph white">Copyright © {thisYear} Japan Style Alrights Reserved.</p>
            </Row>
            </Container>
        </footer>
      
    );
  };

  export default Footer;