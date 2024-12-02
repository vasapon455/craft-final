import React, { useState } from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoadingIndicator from "../components/LoadingIndicator"

const ForgotPassword = () => {
  const [userEmail,setUserEmail] = useState("")
  const [userPhone, setUserPhone] = useState("")
  const [loading, setLoading] = useState(false);


  return (
    <Layout>
      <Section header="Forgot Password">
        {!loading ? (
          <Form className="form-container" >
            <Form.Group controlId="username" className="form-group">
              <Form.Label className="paragraph black">Email Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="กรอกที่อยู่อีเมล"
                className="field"
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 form-group" controlId="password">
              <Form.Label className="paragraph black">Phone Number</Form.Label>
              <Form.Control
                type="password"
                placeholder="กรอกเบอร์โทรศัพท์"
                className="field"
                onChange={(e) => setUserPhone(e.target.value)}
              />
              <Link to="/forgot-password">
                <div style={{ textAlign: "right", margin: "5px" }}>
                </div>
              </Link>
            </Form.Group>
            <Container className="button-group">
              <Button variant="red" type="submit" className="primary-button">
                <p className="paragraph white">ยืนยัน</p>
              </Button>
              <Link to="/register">
              </Link>
            </Container>
          </Form>
        ) : (
          <LoadingIndicator />
        )}
      </Section>
    </Layout>
  );
};

export default ForgotPassword;
