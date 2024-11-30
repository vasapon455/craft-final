import { Container, Row, Col } from "react-bootstrap";
import "../styles/comment.css";
import { Link } from "react-router-dom";

const CommentCard = ({ id, comment, author, commentedDate }) => {

  const handleDelete = (id) =>{
    api.delete(`api/article/comment/${id}`).then((res) => {
      if (res.status === 204) alert("Note deleted!");
      else alert("Failed to delete note.");
      
  })
  .catch((error) => alert(error));

  };
  const formatDate = commentedDate.slice(0,10)
  return (
    <Container fluid className="comment-card" id={id}>
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
           className="pargraph white underline"
          >
            <span className="paragraph white underline" onClick={handleDelete}>+ลบ</span>
  
          </Link>
        </Col>
      </Row>
      <Row className="comment-row">
        <Col
          style={{ textAlign: "left", width:"62vw" }}
          className="comment-text"
        >
          <div className="paragraph white" >{comment}</div>
        </Col>
      </Row>
      <Row className="comment-row">
        <Col  className="comment-inner-left">
          <p className="paragraph black"> {author}</p>
        </Col>
        <Col  className="comment-inner-right">
          <p className="paragraph black">{formatDate}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default CommentCard;
