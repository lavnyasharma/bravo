import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

import "./Login.css";

const SignInForm = ({ email, setEmail, password, setPassword, handleSubmit }) => {
  const [validated, setValidated] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    handleSubmit(event);
  };

  return (
    <Form noValidate validated={validated} onSubmit={onSubmit}>
      <Form.Group className="mb-4 mt-2">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-2 mt-2">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" id="remember-me" label="Remember me" />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        className="submit-button w-100"
      >
        Log In
      </Button>
    </Form>
  );
};

const SignInCard = ({ email, setEmail, password, setPassword, handleSubmit }) => (
  <Card className="form-card">
    <Card.Body className="p-0">
      <h2 className="heading mb-3">Welcome to Bravo Car Deals</h2>

      <Row className="justify-content-center">
        <Col lg={7}>
          <SignInForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleSubmit={handleSubmit}
          />
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(email, password)) {
      navigate('/vehicles');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <section className="login-section d-flex align-items-center justify-content-center">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="py-4 py-lg-5">
            <SignInCard
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleSubmit={handleSubmit}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
