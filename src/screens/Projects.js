import React from 'react'
import './Projects.css'

const Projects = () => {
    return (
        <div className = 'projects' id='projects'>
        <h1>My Projects</h1>
    
        <img src = "img/tictac.png" width="200px"/>
        <h2>Tic-Tac-Toe</h2>
     

        <img src = "img/shooter.png" width="200px"/>
        <h2>Protect the castle</h2>

        <img src = "img/food.png" width="200px"/>
        <h2>Food Vault</h2>
         </div>
    )
}

export default Projects