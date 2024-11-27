import { Container, Row, Col } from "react-bootstrap";
import "../styles/comment.css";
import { Link } from "react-router-dom";

const CommentCard = ({ id, comment, author, commentedDate }) => {
  return (
    <Container fluid className="comment-card">
      <Row className="comment-row">
        <Col lg={12} className="comment-inner-left">
          <p>ความคิดเห็นที่ {id}</p>
        </Col>
        <Col className="comment-inner-right">
          <Link
            to="/"
            style={{
              fontFamily: "Kanit",
              color: "#f0f0f0",
              textDecoration: "underline",
              margin: '20px'
            }}
          >
            +แก้ไข
          </Link>
          <Link
            to="/"
            style={{
              fontFamily: "Kanit",
              color: "#f0f0f0",
              textDecoration: "underline",
            }}
          >
            +ลบ
          </Link>
        </Col>
      </Row>
      <Row className="comment-row">
        <Col
          lg={12}
          className="comment-inner-center"
          style={{ textAlign: "left" }}
        >
          <p>{comment}</p>
        </Col>
      </Row>
      <Row className="comment-row">
        <Col lg={12} className="comment-inner-left">
          <p>{author}</p>
        </Col>
        <Col lg={12} className="comment-inner-right">
          <p>{commentedDate}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default CommentCard;
