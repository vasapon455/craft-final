import { Container, Row, Col } from "react-bootstrap";
import "../styles/comment.css";
import { Link } from "react-router-dom";
import api from "../api";

const CommentCard = ({ id, comment, author, commentedDate, comment_id }) => {
  
  const handleDelete = (comment_id) =>{
    api.delete(`api/article/comment/${comment_id}`).then((res) => {
      if (res.status === 204) alert("ลบคอมเม้นแล้ว!");
      else alert("ไม่สามารถลบคอมเม้นได้");
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
            <button className="paragraph white underline" style={{backgroundColor:"transparent",border:"none"}} onClick={()=>handleDelete(comment_id)}>+ลบ</button>
  
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
