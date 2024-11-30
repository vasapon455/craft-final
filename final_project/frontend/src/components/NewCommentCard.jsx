import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import api from "../api";

const NewCommentCard = ({ page }) => {
  const [commentext, setCommentText] = useState("");

  const createComment = (e) => {
    e.preventDefault();
    api
      .post("api/article/comment/new/", {commentext,page})
      .then((res) => {
        if (res.status === 201) alert("Comment created!");
        else alert("Failed to make comment.");
      })
      .catch((err) => alert(err));
  };

  return (
    <Form className="comment-card-create" onSubmit={createComment}>
      <Form.Group controlId="formCommentText" style={{ textAlign: "left" }}>
        <Form.Label
          className="paragraph black"
          style={{ display: "block", marginBottom: "20px" }}
        >
          ความคิดเห็นใหม่
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="กรอกความคิดเห็น"
          className="field"
          style={{ height: "auto", textAlign: "left", paddingBottom: "200px" }}
          onChange={(e) => setCommentText(e.target.value)}
        />
      </Form.Group>
      <Button variant="red" type="submit" className="primary-button">
        <p className="paragraph white">ยืนยัน</p>
      </Button>
    </Form>
  );
};

export default NewCommentCard;
