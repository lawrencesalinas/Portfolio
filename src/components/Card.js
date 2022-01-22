import React from "react";
import "./Card.css";
import { Button } from "@mui/material";

function Card({ src, title, description, tech, git, demo }) {
  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="card_info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h4>{tech}</h4>

       <a href ={git} target="_blank">
        <Button variant="outlined"  type="submit">
          Github
        </Button>
        </a>
        <a href = {demo} target="_blank">
        <Button className="demo"  variant="outlined">
          Demo
        </Button>
        </a>
      </div>
    </div>
  );
}

export default Card;
