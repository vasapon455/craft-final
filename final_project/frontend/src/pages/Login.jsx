import Layout from "../components/Layout";
import Section from "../components/Section";
import "../styles/login-register.css";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import api from "../api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    
    const user = {
      username: username,
      password: password
    };

    const {data} = await api.post('/token',
    user ,{headers: {'Content-Type': 'application/json'}},{withCredentials: true});
    localStorage.clear();
    localStorage.setItem('access_token', data.access);
    localStorage.setItem('refresh_token', data.refresh);
    api.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
     window.location.href = '/'
  };


  return (
    <Layout>
      <Section header="Login">
        <Form className="form-container" onSubmit={submit} >
          <Form.Group controlId="formUserName" className="form-group">
            <Form.Label className="paragraph black">Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="กรอกชื่อผู้ใช้งาน"
              className="field"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 form-group" controlId="formPassword">
            <Form.Label className="paragraph black">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="กรอกรหัสผ่าน"
              className="field"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Form>
        <Container className="button-group">
          <Button variant="red" type="submit" className="primary-button">
            <p className="paragraph white">Login</p>
          </Button>
          <Link to="/register">
            <p className="paragraph black underline">Register</p>
          </Link>
        </Container>
      </Section>
    </Layout>
  );
};

export default Login;
