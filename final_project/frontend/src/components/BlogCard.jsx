import "../styles/blog-card.css";
import { Container, Row, Col } from "react-bootstrap";

const BlogCard = ({ header, createdDate, summary }) => {
  return (
 
      <Container className="blog-card">
        <Row className="blog-inner">
          <Col lg={4}>
            <div className="blog-card-image">
              <img />
            </div>
          </Col>
          <Col className="blog-card-right" lg={8}>
            <h2 style={{ fontSize: "48px",padding:"0px",margin:"0px" }}>{header}</h2>
            <span className="blog-card-text">{createdDate}</span>
            <p className="blog-card-text">{summary}</p>
          </Col>
        </Row>
      </Container>
  
  );
};

export default BlogCard;
