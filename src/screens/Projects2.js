import React from "react";
import "./Projects2.css";
import Card2 from "../components/Card2";
import { Container, Row, Col } from "react-bootstrap";

const Projects = () => {
  return (
    <div>
      <div className="projects mb-20" id="projects">
        <h1>My Projects</h1>
        <Row>
          <Col md={4} xs={12} l={4} xl={4}>
            <Card2
              src="img/pawprofile.png"
              title="Pawsibly"
              description="Full stack application that allows users to find pet sitters nearby."
              tech = "React.js, Django, PostgresQL ,AWS, Bootstrap"
              git="https://github.com/lawrencesalinas/pawsibly-production"
              demo="https://pawsibly-demo.herokuapp.com/"
            />
          </Col>
          <Col md={4} xs={12} l={4} xl={4}>
            <Card2
              src="img/sir.png"
              title="Airbnb react clone"
              description="A personal Airbnb clone prject to enhance my skills in React and css, backend implemantation is on the works."
              tech="HTML,CSS, Javascript, React, Materialize,Jsx"
              git="https://github.com/lawrencesalinas/airbnb-clone-project"
              demo="https://airbnb-clone-react-practice.herokuapp.com/"
            />
          </Col>
          <Col md={4} xs={12} l={4} xl={4}>
            <Card2
              src="img/help.png"
              title="Helping Hand"
              description="Helping Hand connects the community with the ability to list their goods for the community"
              tech="HTML,CSS, Javascript, React, Mongoose, MongoDb, Bootstrap,Full CRUD"
              git="https://github.com/lawrencesalinas/Helping-Hand-React"
              demo="https://helping-hands-sei.herokuapp.com/"
            />
          </Col>
        </Row>
      </div>
      <div className="projects mb-20" id="projects">
        <Row>
          <Col md={4} xs={12} l={4} xl={4}>
            <Card2
              src="img/food.png"
              title="Pocket Food Vault"
              description="Food Pocket Vault is a restaurant search tool info provider especially for the food lover. it gives users abundant information and pricing on the go and also allows the user
                 to leave a review."
              tech="HTML,CSS, Javascript, Node.js, Express, Postgres, sequelize, Ejs,Bootstrap, Full CRUD"
              git="https://github.com/lawrencesalinas/Pocket-Food-Vault"
              demo="https://pocket-food-vault.herokuapp.com/"
            />
          </Col>

          <Col md={4} xs={12} l={4} xl={4}>
            <Card2
              src="img/tictac.png"
              title="tic-tac-toe"
              description="The classic tic-tac-toe game that everybody loves."
              tech="HTML,CSS, Javascript"
              git=""
              demo=""
            />
          </Col>

          <Col md={4} xs={12} l={4} xl={4}>
            <Card2
              src="img/castle.png"
              title="Protect the castle"
              description="Protect the castle is a  2d competitive shooting game played by two opposing sides"
              tech="HTML,CSS, Javascript, Canvas"
              git="https://github.com/lawrencesalinas/Protect-the-castle"
              demo="https://lawrencesalinas.github.io/Protect-the-castle/"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Projects;
