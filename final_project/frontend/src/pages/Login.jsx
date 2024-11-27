import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import "../styles/login-register.css"
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Layout>
      <Section header="Login">
        <Form className="form-container">
          <Form.Group controlId="formUserName" className="form-group">
            <Form.Label className="paragraph black">Username</Form.Label>
            <Form.Control type="text" placeholder="กรอกชื่อผู้ใช้งาน" className="field" />
          </Form.Group>
          <Form.Group className="mb-3 form-group" controlId="formPassword" >
            <Form.Label className="paragraph black">Password</Form.Label>
            <Form.Control type="password" placeholder="กรอกรหัสผ่าน" className="field" />
          </Form.Group>
        </Form>
        <Container className="button-group">
        <Button variant="red" type="submit" className="primary-button">
        <p className="paragraph white">Login</p>
      </Button>
      <Link to='/register' >
        <p className="paragraph black underline">Register</p>
      </Link>
     </Container>
      </Section>
    </Layout>
  );
};

export default Login;
