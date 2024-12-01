import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Section from "../components/Section";
import api from "../api";

const NewArticle = () => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image,setImage] = useState("")
  const navigate = useNavigate()


console.log(image,title,content)

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post("/api/article/", {title,content})
      .then((res) => {
        if (res.status === 201) alert("โพสเนื้อหาใหม่แล้ว!");
        else alert("ไม่สามารถโพสเนื้อหาใหม่ได้");
      })
      .catch((err) => alert(err));
      navigate('/article')
  };

  const handleImageChange =(e)=>{
    setImage(e.target.files[0]);
  }



  return (
    <Layout>
      <Section header="โพสเนื้อหาใหม่">
        <Form onSubmit={handleSubmit} className="form-container">
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
              className="form-group" style={{ margin: "20px" }}
            
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
                  width:"60vw",
                  paddingBottom: "200px",
                }}
                onChange={(e) => setContent(e.target.value)
              
                }
                value={content}
              />
            </Form.Group>
          <Button variant="red" type="submit" className="primary-button">
            <p className="paragraph white">สร้างบทความ</p>
          </Button>
        </Form>
      </Section>
    </Layout>
  );
};

export default NewArticle;
