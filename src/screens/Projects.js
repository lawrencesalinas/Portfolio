import React from 'react'
import './Projects.css'
import Card from '../components/Card'


const Projects = () => {
    return (
  
        <div className = 'projects' id= 'projects'>
        <h1>My Projects</h1>
        <div className ='projects_card'>
     
        <Card
                src="img/help.png"
                title="Helping Hand"
                description="Helping Hand connects the community with the ability to list their goods for the community"
                tech="HTML,CSS, Javascript, React, Mongoose, MongoDb, Bootstrap,Full CRUD"
                git="https://github.com/lawrencesalinas/Helping-Hand-React"
                demo="https://helping-hands-sei.herokuapp.com/"
            />
            
            
         
                <Card
                src="img/sir.png"
                title="Airbnb react clone"
                description="A personal Airbnb clone prject to enhance my skills in React and css, backend implemantation is on the works."
                tech="HTML,CSS, Javascript, React, Materialize,Jsx"
                git="https://github.com/lawrencesalinas/airbnb-clone-project"
                demo=""
            />
            </div>
            <div className ='projects_card'>
                       
               <Card
                src="img/food.png"
                title="Pocket Food Vault"
                description="Food Pocket Vault is a restaurant search tool info provider especially for the food lover. it gives users abundant information and pricing on the go and also allows the user
                 to leave a review."
                 tech="HTML,CSS, Javascript, Node.js, Express, Postgres, sequelize, Ejs,Bootstrap, Full CRUD"
                 git="https://github.com/lawrencesalinas/Pocket-Food-Vault"
                 demo="https://pocket-food-vault.herokuapp.com/"
            />

               <Card
                 src="img/tictac.png"
                title="tic-tac-toe"
                description="The classic tic-tac-toe game that everybody loves."
                tech="HTML,CSS, Javascript"
                git=""
                demo=""
            />
            </div>
            <div className ='projects_card'>
              <Card
                src=''
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
                git=""
                demo=""
            />
                <Card
                src="img/castle.png"
                title="Protect the castle"
                description="Protect the castle is a  2d competitive shooting game played by two opposing sides"
                tech="HTML,CSS, Javascript, Canvas"
                git="https://github.com/lawrencesalinas/Protect-the-castle"
                demo="https://lawrencesalinas.github.io/Protect-the-castle/"
            />
            </div>
        </div>
     
  
    )
}

export default Projects