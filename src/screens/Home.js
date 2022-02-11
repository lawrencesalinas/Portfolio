
import { Container, Row, Col, Card,Button } from "react-bootstrap";
import React from "react";
import "./Home.css";
import About from "./About";
import Header from "../components/Header";

const HomePage = () => {
  return (


        <div className="home" id="home">
          <div className="home_info">
            <h1>Hi, I'm Lawrence</h1>
            <Card.Text>
              <p>
                I'm a full stack web developer driven <br></br>to find
                opportunities to grow
                <br /> and innovate solutions for the end-user.
              </p>
            </Card.Text>
            <a href = "https://github.com/lawrencesalinas" target="_blank">
            <Button id='button' variant ='dark'>CHECK OUT MY GITHUB</Button></a>
          </div>
        </div>
      
    
  );
};

export default HomePage;
