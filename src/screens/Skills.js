import React from "react";
import "./Skills.css";
import { Button } from "react-bootstrap"
import { Container,Row, Col } from "react-bootstrap";

function Skills() {
  return (

      <Row>
     
    <div className="skills" id="skills">
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

        <a href ="img/resume.pdf" target="_blank">
      <Button id='resume' variant="warning"
      >Check out my resume</Button>
      </a>
      <p id = 'about_p'>I am currentlyworking on projects to keep</p>
      
    </div>
 
    </Row>


  );
}

export default Skills;
