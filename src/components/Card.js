import React from "react";
import "./Card.css";
import { Button } from "@mui/material";

function Card({ src, title, description, price }) {
  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="card_info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>

        <a href="ewewq">
    
          <Button variant="outlined" target="_blank" type="submit">
            GITHUB
          </Button>
        </a>
        <a href="ewewq">
         
          <Button className="demo" target="_blank" variant="outlined">
            Demo
          </Button>
        </a>
      </div>
    </div>
  );
}

export default Card;
