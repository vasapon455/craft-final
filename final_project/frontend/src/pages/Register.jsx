import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import Layout from "../components/Layout";
import Section from "../components/Section";
import { Form, Button, Container } from "react-bootstrap";


const Register = () => {
  const [name,setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("")
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const res = await api.post("/api/user/register/", { username, password, address });
     {
        navigate("/");
      } 
      
    } catch (error) {
      alert(error);
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Section header="Register">
        <Form className="form-container" onSubmit={handleSubmit}>
          <Form.Group controlId="formName" className="form-group">
            <Form.Label className="paragraph black">Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="กรอกชื่อ"
              className="field"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formAddress" className="form-group">
            <Form.Label className="paragraph black">Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="กรอกที่อยู่"
              className="field"
              onChange={(e) => setAddress(e.target.value)}
            /> </Form.Group>
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
              className="field paragraph"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Container className="button-group">
            <Button variant="red" type="submit" className="primary-button">
              <p className="paragraph white">Register</p>
            </Button>
            <Link to="/login">
              <p className="paragraph black underline">Login</p>
            </Link>
          </Container>
        </Form>
      </Section>
    </Layout>
  );
};

export default Register;
