import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import "../styles/login-register.css"
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Layout>
      <Section header="Register">
        <Form className="form-container">
        <Form.Group controlId="formName" className="form-group">
            <Form.Label className="paragraph black">Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="กรอกชื่อ"
              className="field"
            />
          </Form.Group>
          <Form.Group controlId="formUserName" className="form-group">
            <Form.Label className="paragraph black">Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="กรอกชื่อผู้ใช้งาน"
              className="field"
            />
          </Form.Group>
          <Form.Group className="mb-3 form-group" controlId="formPassword">
            <Form.Label className="paragraph black">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="กรอกรหัสผ่าน"
              className="field paragraph"
            />
          </Form.Group>
        </Form>
        <Container className="button-group">
          <Button variant="red" type="submit" className="primary-button">
            Register
          </Button>
          <Link to="/login">
            <p className="paragraph black underline">Login</p>
          </Link>
        </Container>
      </Section>
    </Layout>
  );
};

export default Register;
