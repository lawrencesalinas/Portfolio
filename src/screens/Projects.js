import React from 'react'
import './Projects.css'
import Card from '../components/Card'

const Projects = () => {
    return (
  
        <div className = 'projects' id= 'projects'>
        <h1>My Projects</h1>
        <div className ='projects_card'>
        <Card
                src="img/search.png"
                title="Food Poacket Vault"
                description="Unique activities we can do together, led by a world of hosts."
            />
                <Card
                src="img/castle.png"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
            />
               <Card
                src="img/food.png"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
            />
                   </div>
             <div className ='projects_card'>
               <Card
                src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
            />
            <button>hello</button>
              <Card
                src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
            />
                <Card
                src="img/castle.png"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
            />
            </div>
        </div>
     
  
    )
}

export default Projects