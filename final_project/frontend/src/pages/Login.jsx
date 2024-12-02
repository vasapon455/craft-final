import Layout from "../components/Layout";
import Section from "../components/Section";
import { Form, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../api";
import LoadingIndicator from "../components/LoadingIndicator"

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await api.post("/api/token/", { username, password });
      localStorage.setItem(ACCESS_TOKEN, res.data.access);
      localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
      navigate("/");
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
      location.reload();
    }
  };

  return (
    <Layout>
      <Section header="Login">
        {!loading ? (
          <Form className="form-container" onSubmit={handleSubmit}>
            <Form.Group controlId="username" className="form-group">
              <Form.Label className="paragraph black">Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="กรอกชื่อผู้ใช้งาน"
                className="field"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 form-group" controlId="password">
              <Form.Label className="paragraph black">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="กรอกรหัสผ่าน"
                className="field"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Link to="/forgot-password">
                <div style={{ textAlign: "right", margin: "5px" }}>
                  <span className="caption black underline">
                    Forgot Password?
                  </span>
                </div>
              </Link>
            </Form.Group>
            <Container className="button-group">
              <Button variant="red" type="submit" className="primary-button">
                <p className="paragraph white">Login</p>
              </Button>
              <Link to="/register">
                <p className="paragraph black underline">Register</p>
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

export default Login;
