import React, { FC, useState } from "react";
import Image from "react-bootstrap/Image";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import validator from "validator";
import { Alert } from "@mui/material";
import { logInUser } from "../../services/userService";
import { request } from "http";

interface ICredentials {
  email: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<Partial<ICredentials>>({
    email: "",
    password: "",
  });

  const [emailFocus, setEmailFocus] = useState<boolean>(false);
  const [passwordFocus, setPasswordFocus] = useState<boolean>(false);

  const validateEmail = () => {
    if (credentials.email && validator.isEmail(credentials.email)) {
      return true;
    } else {
      return false;
    }
  };

  const validatePassword = () => {
    if (
      credentials.password &&
      validator.isStrongPassword(credentials.password, {
        minLength: 6,
        minLowercase: 0,
        minUppercase: 0,
        minNumbers: 0,
        minSymbols: 0,
      })
    ) {
      return true;
    } else {
      return false;
    }
  };

  const validateForm = () => {
    // will return false if both present and return true if any one or zero present
    // and set it to the disable which accepts a boolean
    if (validatePassword() && validateEmail()) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // CHECK IF USER EXISTS, THEN LOGIN AND SHOW DASHBOARD
    if (validateForm()) {
      const authenticated = await logInUser(credentials);
      console.log(authenticated);

      if (authenticated) {
        navigate("/auth/dashboard");
      } else {
        return alert("Wrong password or email")
      }
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <div className="container-image">
        <Image
          src={process.env.PUBLIC_URL + "/image.png"}
          roundedCircle
          className="img-fluid"
        />
      </div>
      <div className="pitch-text">
        Welcome back <br />
        ⊂(◉‿◉)つ
      </div>
      <div className="vertical-line"></div>

      <Form className="login">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            required
            name="email"
            type="email"
            placeholder="Enter email"
            onChange={(event) => {
              const email: string = event.currentTarget.value;
              setCredentials({
                ...credentials,
                email: email,
              });
            }}
            onFocus={() => {
              setEmailFocus(true);
            }}
          />
          {!validateEmail() && emailFocus && credentials.email && (
            <Alert className="alert" severity="error">
              Please enter a valid email
            </Alert>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            autoComplete="on"
            required
            type="password"
            placeholder="Password"
            onChange={(event) => {
              const password: string = event.currentTarget.value;
              setCredentials({
                ...credentials,
                password: password,
              });
            }}
            onFocus={() => {
              setPasswordFocus(true);
            }}
          />
          {!validatePassword() && passwordFocus && credentials.password && (
            <Alert className="alert" severity="error">
              Password should be atleast 6 characters long
            </Alert>
          )}
        </Form.Group>

        <Button
          disabled={!validateForm()}
          className="login-button"
          variant="primary"
          type="submit"
          size="lg"
          onClick={handleSubmit}
        >
          Log In
        </Button>
      </Form>
    </div>
  );
}

export default Login;
