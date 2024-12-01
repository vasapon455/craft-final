import { Container, Row, Col } from "react-bootstrap";
import "../styles/comment.css";
import { Link } from "react-router-dom";
import api from "../api";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const CommentCard = ({ id, comment, author, commentedDate, comment_id }) => {
  const [newcomment, setNewComment] = useState("");
  const [edit, setEdit] = useState(false);

  const formData = new FormData();
  formData.append("comment_text", newcomment);

  const handleDelete = (comment_id) => {
    api
      .delete(`/api/article/comment/${comment_id}/`, { withCredentials: true })
      .then((res) => {
        if (res.status === 204) {
          alert("ลบคอมเม้นแล้ว!");
        } else alert("ไม่สามารถลบคอมเม้นได้");
      })
      .catch((error) => alert(error));
  };

  const handleEdit = (comment_id) => {
    api
      .patch(`/api/article/comment/${comment_id}/update/`, formData, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status === 200) {
          alert("แก้ไขคอมเม้นแล้ว!");
        } else alert("ไม่สามารถแก้ไขคอมเม้นได้");
      })
      .catch((error) => alert(error));
    setEdit(false);
   
  };

  const formatDate = commentedDate.slice(0, 10);

  return (
    <Container fluid className="comment-card" id={id}>
      <Row className="comment-row">
        <Col className="comment-inner-left">
          <p className="paragraph black">ความคิดเห็นที่ {id}</p>
        </Col>
        <Col className="comment-inner-right">
          {!edit ? (
            <Link
              style={{
                margin: "20px",
              }}
            >
              <span
                className="paragraph white underline"
                onClick={() => setEdit(() => (!edit ? true : false))}
              >
                +แก้ไข
              </span>
            </Link>
          ) : null}
          <Link className="pargraph white underline">
            {!edit ? (
              <button
                className="paragraph white underline"
                style={{ backgroundColor: "transparent", border: "none" }}
                onClick={() => handleDelete(comment_id)}
              >
                +ลบ
              </button>
            ) : null}
          </Link>
        </Col>
      </Row>
      <Row className="comment-row">
        <Col
          style={{ textAlign: "left", width: "62vw" }}
          className="comment-text"
        >
          {!edit ? (
            <div className="paragraph white">{comment}</div>
          ) : (
            <Form>
              <Form.Control
                type="text"
                placeholder="กรอกความคิดเห็น"
                className="field"
                style={{
                  height: "auto",
                  textAlign: "left",
                  paddingBottom: "200px",
                  width: "60vw",
                }}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <Form.Group className="button-group white">
                <Button
                  className="primary-button"
                  variant="red"
                  onClick={() => handleEdit(comment_id)}
                >
                  ยืนยัน
                </Button>
              </Form.Group>
            </Form>
          )}
        </Col>
      </Row>
      <Row className="comment-row">
        <Col className="comment-inner-left">
          <p className="paragraph black"> {author}</p>
        </Col>
        <Col className="comment-inner-right">
          <p className="paragraph black">{formatDate}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default CommentCard;
