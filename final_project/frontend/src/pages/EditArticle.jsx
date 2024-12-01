import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useArticles } from "../contexts/ArticleProvider";
import Layout from "../components/Layout";
import Section from "../components/Section";

import api from "../api";

const EditArticle = () => {
  const {article_id} = useParams();

  const [articles, comments] = useArticles();
  const item = articles[article_id-1]

  const [title, setTitle] = useState(item['title']);
  const [content, setContent] = useState(item['content']);
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const formData = new FormData();
  formData.append('title', title);
  formData.append('content', content);

  console.log(item);

  const handleSubmit = (item_id) => {
    api
      .patch(`/api/article/${item_id}/update`, formData, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status === 200) {
          alert("แก้ไขบทความแล้ว!");
          navigate("/article");
        } else alert("ไม่สามารถแก้ไขบทความได้");
      })
      .catch((error) => alert(error));
    setEdit(false);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <Layout>
      <Section header="แก้ไขบทความ">
        <Form  className="form-container">
          <Form.Group className="form-group" style={{ margin: "20px" }}>
            <Form.Label
              className="paragraph black"
              style={{
                display: "block",
                marginBottom: "20px",
                textAlign: "left",
              }}
            >
              อัปโหลดรูปภาพ
            </Form.Label>
            <Form.Control
              type="file"
              name="image"
              placeholder="อัปโหลดรูปภาพ"
              className="field"
              style={{
                width: "60vw",
                marginBottom: "20px",
              }}
              onChange={handleImageChange}
            />
            <Form.Label
              className="paragraph black"
              style={{
                display: "block",
                marginBottom: "20px",
                textAlign: "left",
              }}
            >
              ชื่อเรื่อง
            </Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="กรอกชื่่อเรื่อง"
              className="field"
              value={title}
              style={{
                height: "auto",
                textAlign: "left",
                width: "60vw",
              }}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            controlId="formContent"
            className="form-group"
            style={{ margin: "20px" }}
          >
            <Form.Label
              className="paragraph black"
              style={{ display: "block", marginBottom: "20px" }}
            >
              เนื้อหาบทความ
            </Form.Label>
            <Form.Control
              type="text"
              name="content"
              placeholder="กรอกเนื้อหาบทความ"
              className="field"
              style={{
                height: "auto",
                textAlign: "left",
                width: "60vw",
                paddingBottom: "200px",
              }}
              onChange={(e) => setContent(e.target.value)}
              value={content}
            />
          </Form.Group>
          <Button variant="red"  className="primary-button" onClick={()=>handleSubmit(item['id'])}>
            <p className="paragraph white">แก้ไขบทความ</p>
          </Button>
        </Form>
      </Section>
    </Layout>
  );
};

export default EditArticle;
