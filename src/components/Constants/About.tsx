import React from "react";
import Image from "react-bootstrap/Image";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./styles.css"

function About() {
  return (
    <div>
      <Image
        src={process.env.PUBLIC_URL + "/me.jpg"}
        roundedCircle
        className="about-image"
      />
      <div className="about-section">

        <div className="about-intro" >
          <b>
            This Blog website is created by Ayush Ranjan, a 4<sup>th</sup> year student at IIITDM, Kancheepuram
          </b><br /> <br />
          The frontend is written in ReactJS Typescript and the backend uses ExpressJS.
          The frontend is hosted on Github pages and the backend is hosted on Heroku.
          The database used is MongoDB hosted on MongoDB Atlas.
          <br /> <br />
          <div className="about-links">
            My Resume: <a href="https://drive.google.com/file/d/1n46s0l_is1wLR3XFRTjCViG-XZYIOSMb/view?usp=sharing"><i>Click here</i></a>
            <br />
            Contact me: <a href="/contact"><i>Click here</i></a>
          </div>
          <div className="about-social-icons">
          <a href="https://linkedin.com/in/ayushr2345"><LinkedInIcon className="social-icon" /></a>
            <a href="https://github.com/ayushr2345"><GitHubIcon className="social-icon" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
