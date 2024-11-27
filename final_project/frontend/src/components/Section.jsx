import { Container } from "react-bootstrap";
import "../styles/section.css";

const Section = (props) => {
  return (
    <Container className="main-container">
      <h1>{props.header}</h1>
      {props.children}
    </Container>
  );
};
export default Section;
