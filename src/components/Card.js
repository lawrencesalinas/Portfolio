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

       <a href ={git} >
        <Button variant="outlined" target="_blank" type="submit">
          Github
        </Button>
        </a>
        <a href = {demo}>
        <Button className="demo" target="_blank" variant="outlined">
          Demo
        </Button>
        </a>
      </div>
    </div>
  );
}

export default Card;
