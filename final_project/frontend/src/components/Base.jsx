import NavBar from "./NavBar";
import Footer from "./Footer";
import '../styles/base.css'
import { Container } from "react-bootstrap";

const Base = (props) => {
  return (
    <>
      <NavBar />
      <Container className="main-container">
        <h1>{props.header}</h1>
      </Container>
      <Footer />
    </>
  );
};

export default Base;