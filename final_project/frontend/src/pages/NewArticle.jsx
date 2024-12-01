import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import api from "../api";

const NewArticle = () => {

  const [data, setData] = useState({
    title: "",
    image: "",
    content: "",
});

console.log(data)

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post("api/article/", {data})
      .then((res) => {
        if (res.status === 201) alert("โพสเนื้อหาใหม่แล้ว!");
        else alert("ไม่สามารถโพสเนื้อหาใหม่ได้");
      })
      .catch((err) => alert(err));
  };

  const handleImageChange =(e)=>{
    let newData ={...data}
    newData["image"] = e.target.files[0];
    setData(newData);
  }

  const handleChange =({ currentTarget: input })=>{
    let newData ={...data};
    newData[input.name] = input.value;
    setData(newData);
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
              value={data.title}
              style={{
                height: "auto",
                textAlign: "left",
                width: "60vw",
              }}
              onChange={(e) => handleChange(e)}
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
                onChange={(e) => handleChange(e)
              
                }
                value={data.content}
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
