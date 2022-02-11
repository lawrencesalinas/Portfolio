import React from "react";
import "./Skills.css";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

function Skills() {
  return (
    <Row>
      <div className="skills" id="skills">
        <Row>
          <Col md={6} xs={12} s={12} lg={6}>
          <h1>Skills</h1>
          <div className="skills_logos">
            <Row>
              <Col xs={12} s={12} md={12} lg={12}>
                <i class="logo fab fa-js fa-5x"></i>
                <i class="logo fab fa-python fa-5x"></i>
                <i class="logo fab fa-html5 fa-5x"></i>
                <i class="logo fab fa-node fa-5x"></i>
                <i class="logo fab fa-react fa-5x"></i>
                <i class="logo fab fa-css3-alt fa-5x"></i>
              </Col>
            </Row>
          </div>

          <div className="skills_logos2">
            <Row>
              <Col xs={12} s={12} m={12} lg={12}>
                <img className="logo2" src="img/postgres.svg" />
                <img className="logo2" src="img/mongo.svg" />
                <img className="logo2" src="img/dj.svg" />
                <img className="logo2" src="img/express.svg" />
              </Col>
            </Row>
          </div>
          </Col>
          <Col md={6} xs={12} s={12} lg={6}>
          <div className = 'resume_info'>
         
    
          <p id="about_p">
            <h5>"Programming isn't about what you know; <br></br>it's about what you can figure out.” <br></br>- Chris Pine</h5>
            Learning is a continuous process of gaining knowledge and skills,
            <br></br> Technology is always ever growing so it's important for me
            to keep honing my skills as a developer
         
            I am currently working on a Django, React with Rendux full stack
            Ecommerce app and and I am going more in depth with  Django and python to improve my knowledge as a developer.
          </p>
          <a href="https://resume.lawrencesalinas.com/Resume.pdf" target="_blank">
            <Button id="resume" variant="warning">
              Check out my resume
            </Button>
          </a>
          <h2>Check out Ecommerce app</h2>
          </div>
          </Col>
        </Row>
      </div>
    </Row>
  );
}

export default Skills;
