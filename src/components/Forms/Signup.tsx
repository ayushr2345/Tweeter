import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import "./Form.css";
import { Button, Form } from "react-bootstrap";
import validator from "validator";
import { Alert } from "@mui/material";
import IUser from "../../interfaces/User.interface";
import { addUser } from "../../services/userService";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<Partial<IUser>>({
    name: "",
    email: "",
    password: "",
  });

  const [emailFocus, setEmailFocus] = useState<boolean>(false);
  const [passwordFocus, setPasswordFocus] = useState<boolean>(false);
  const [retypedPasswordFocus, setRetypedPasswordFocus] =
    useState<boolean>(false);
  const [retypedPassword, setRetypedPassword] = useState<string>("");

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

  const validateRetypedPassword = () => {
    if (credentials.password === retypedPassword) {
      return true;
    } else {
      return false;
    }
  };

  const validateForm = () => {
    // will return false if both present and return true if any one or zero present
    // and set it to the disable which accepts a boolean
    if (
      validatePassword() &&
      validateEmail() &&
      credentials.name &&
      credentials.password &&
      credentials.email &&
      retypedPassword === credentials.password
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (validateForm()) {
      const authenticated = await addUser(credentials);
      //console.log(authenticated);
      if (authenticated) {
        navigate("/Tweeter/auth/dashboard/");
      } else {
        return alert("The email is already in use")
      }
    } else {
      navigate("/Tweeter/");
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
        Onboarding <br />
        ʕᵔᴥᵔʔ
      </div>
      <div className="vertical-line"></div>

      <Form className="signup">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            required
            type="text"
            name="name"
            placeholder="Enter your Name"
            onChange={(event) => {
              const name: string = event.currentTarget.value;
              setCredentials({
                ...credentials,
                name: name,
              });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            required
            type="email"
            name="email"
            placeholder="Enter your email address"
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
            name="password"
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

        <Form.Group className="mb-3" controlId="formBasicPasswordRetype">
          <Form.Control
            autoComplete="on"
            required
            type="password"
            name="password-retyped"
            placeholder="Retype the Password"
            onChange={(event) => {
              const retypedPassword: string = event.currentTarget.value;
              setRetypedPassword(retypedPassword);
            }}
            onFocus={() => {
              setRetypedPasswordFocus(true);
            }}
          />
          {!validateRetypedPassword() &&
            retypedPasswordFocus &&
            retypedPassword.length > 0 && (
              <Alert className="alert" severity="error">
                Passwords do not match!
              </Alert>
            )}
        </Form.Group>

        <Button
          disabled={!validateForm()}
          className="signup-button"
          variant="outline-dark"
          type="submit"
          size="lg"
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
      </Form>
    </div>
  );
}

export default Signup;
