import { Button } from "@mui/material";
import React from "react";
import "./Home.css";
import Projects from "./Projects";
import About from "./About";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <div>
        
      <div className="home" id="home">
        <div className="home_info">
          <h2>Hello, I'm Lawrence</h2>
          <p>
            I'm a full stack web developer driven to find opportunities
            to grow
            <br /> and innovate solutions for the end-user.
          </p>
          <Button>CHECK OUT MY GITHUB</Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
