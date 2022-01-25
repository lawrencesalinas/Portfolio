import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import "./About.css";
import Skills from "./Skills";

const About = () => {
  return (

<Card className = 'mx-auto card'>
        <div className="about" id="about">
          <div className="about_info">
            <h1>About Me</h1>
            <br></br>

            <p className="about_p">
              Cafe restaurant manager turned full stack developer who is driven
              and enjoys the challenge of finding efficient solutions to
              problems. I am currently looking to work with a team of motivated
              individuals to create products that provide solutions to
              real-world problems. When I am not coding, I enjoy competitive
              sports and outdoor activities. Through personal and professional
              experiences, I bring someone who is organized and well-prepared,
              easy to work with, and anticipates needs and concerns to any
              project and working environment. I look forward to facing
              challenging problems that future roles will provide and completing
              the journey it takes to overcome them.
            </p>
          </div>
        </div>
        </Card>
    
  );
};

export default About;
