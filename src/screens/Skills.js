import React from "react";
import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";

function Skills() {
  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <div className="skills_logos">
          <i class="logo fab fa-js fa-5x"></i>
          <i class="logo fab fa-python fa-5x"></i>
          <i class="logo fab fa-html5 fa-5x"></i>
          <i class="logo fab fa-node fa-5x"></i>
          <i class="logo fab fa-react fa-5x"></i>
        <i class="logo fab fa-css3-alt fa-5x"></i>
      </div>
      <div className="skills_logos2">
      
        <img className="logo2" src="img/postgres.svg" />
        <img className="logo2" src="img/mongo.svg" />
        <img className="logo2" src="img/dj.svg" />
        <img className="logo2" src="img/express.svg" />
      </div>
      <form action ="#home">
      <Button className='resume' variant="outlined" target="_blank" type="submit">Check out my resume</Button>
      </form>
    </div>
  );
}

export default Skills;
