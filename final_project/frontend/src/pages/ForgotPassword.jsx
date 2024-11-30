import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <Layout>
      <Section header="Forgot Password">
        <Form className="form-container">
        <Form.Group controlId="formName" className="form-group">
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
          <p className="paragraph white">Submit</p>
          </Button>
        </Container>
      </Section>
    </Layout>
  );
};

export default ForgotPassword;
