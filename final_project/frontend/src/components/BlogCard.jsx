import "../styles/blog.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const BlogCard = ({ header, createdDate, summary }) => {
  return (
 
      <Container className="blog-card">
        <Link to='/detail' className="link">
        <Row className="blog-inner">
          <Col lg={4}>
            <div className="blog-card-image">
              <img /> 
            </div>
          </Col>
          <Col className="blog-card-right" lg={8}>
            <h2 className="heading2 white">{header}</h2>
            <span className="paragraph white">{createdDate}</span>
            <p className="paragraph white">{summary}</p>
          </Col>
        </Row>'
         </Link>
      </Container>
     
  );
};

export default BlogCard;
