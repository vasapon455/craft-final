import Layout from "../components/Layout";
import Section from "../components/Section";
import "../styles/login-register.css";
import { Form, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const submit = async (e) => {
   
    e.preventDefault();
    
    const user = {
      username: username,
      password: password
    };
    const res = await api.post('/api/user/login',user)
    const data = res.data
    data.sucess? navigate('/'):console.error('Error')
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
           <Link to="/register">
            <div style={{textAlign: "right", margin:"5px"}}>
            <span className="caption black underline">Forgot Password?</span>
            </div>
          </Link>
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
