import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import "./Home.css";
import { Button } from "react-bootstrap";
import Pitch from "./Pitch";
import { LinkContainer } from "react-router-bootstrap";

function Home() {
  return (
    <div className="main-container">
      <div className="container-image">
        <Image
          src={process.env.PUBLIC_URL + "/image.png"}
          roundedCircle
          className="img-fluid"
        />
      </div>

      <div className="vertical-line"></div>

      <Pitch />

      <div className="buttons-home">
        <LinkContainer to="/Tweeter/login/">
          <Button className="login-button" variant="primary" size="lg">
            Log In
          </Button>
        </LinkContainer>

        <LinkContainer to="/Tweeter/signup/">
          <Button className="signup-button" variant="outline-dark" size="lg">
            Sign Up
          </Button>
        </LinkContainer>
      </div>
    </div>
  );
}

export default Home;
