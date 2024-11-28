import { Container, Row, Col } from "react-bootstrap";
import "../styles/comment.css";
import { Link } from "react-router-dom";

const CommentCard = ({ id, comment, author, commentedDate }) => {
  return (
    <Container fluid className="comment-card">
      <Row className="comment-row">
        <Col  className="comment-inner-left">
          <p className="paragraph black">ความคิดเห็นที่ {id}</p>
        </Col>
        <Col className="comment-inner-right">
          <Link
            to="/"
            style={{
              margin: '20px'
            }}
           
          >
            <span className="paragraph white underline">+แก้ไข</span>
          </Link>
          <Link
            to="/"
           className="pargraph white underline"
          >
            <span className="paragraph white underline">+ลบ</span>
            
          </Link>
        </Col>
      </Row>
      <Row className="comment-row">
        <Col
          style={{ textAlign: "left" }}
        >
          <p className="paragraph white">{comment}</p>
        </Col>
      </Row>
      <Row className="comment-row">
        <Col lg={12} className="comment-inner-left">
          <p className="paragraph black"> {author}</p>
        </Col>
        <Col lg={12} className="comment-inner-right">
          <p className="paragraph black">{commentedDate}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default CommentCard;
