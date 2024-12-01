import React, { useState } from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const ForgotPassword = () => {

  const [userData,setUserdata] = useState()

  const getUser = ()=>{
    api.get("/api/shop-items/", { withCredentials: true })
    .then((res) => setProductData(res.data))
    .catch((error) => {
      console.error("Error fetching the comments.", error);
    });
  }


  return (
    <Layout>
      <Section header="Forgot Password">
        <Form className="form-container">
        <Form.Group controlId="formName" className="mb-3 form-group">
        <Form.Label className="paragraph black">Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="กรอกชื่อผู้ใช้งาน"
              className="field"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
        </Form>
        <Container className="button-group">
          <Button variant="red" type="submit" className="primary-button">
          <p className="paragraph white">ขอรหัสผู้ใช้</p>
          </Button>
        </Container>
      </Section>
    </Layout>
  );
};

export default ForgotPassword;
