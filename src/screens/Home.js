import { Button } from "@mui/material";
import { Container, Row, Col, Card } from "react-bootstrap";
import React from "react";
import "./Home.css";
import Projects from "./Projects";
import About from "./About";
import Header from "../components/Header";

const HomePage = () => {
  return (

      <Card.Body>
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
            <Button>CHECK OUT MY GITHUB</Button>
          </div>
        </div>
      </Card.Body>
    
  );
};

export default HomePage;
