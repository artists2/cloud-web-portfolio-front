import React from "react";
import { Form, Button } from "react-bootstrap";
import "./pages_styles.css";

function Signin() {
  return (
    <div>
      <div className="login-main-container">
        <div className="main-container">
          <header className="main-wrap">
            <h1>Stock Portfolio</h1>
          </header>
          <div className="login-form">
            <Form>
              <Form.Group
                controlId="formBasicEmail"
                className="login-input-form"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  className="login-input-wrap"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group
                controlId="formBasicPassword"
                className="login-input-form"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  className="login-input-wrap password-wrap"
                  placeholder="Password"
                />
              </Form.Group>
              {/* <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember " />
          </Form.Group> */}
              <Button
                variant="link"
                type="submit"
                className="login-button-wrap"
              >
                <strong>Sign In</strong>
              </Button>
              <Button variant="link" className="signup-button-wrap">
                <strong>Sign Up</strong>
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
