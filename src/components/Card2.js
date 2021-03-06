import React from 'react';
import { Card, Button } from 'react-bootstrap'
import './Card2.css'

function Card2({ src, title, description, tech, git, demo }) {
  return (   

    <Card className = 'card mb-3'>
  <div className="card">
    
  
    <Card.Img className='card_img' src={src}/>
    <Card.Body className = 'card_info'>
    <Card.Title>
    <h3>{title}</h3>
    </Card.Title>
    <Card.Text>
    <p>{description}</p>
    <h6>{tech}</h6>
    </Card.Text> 
    <a href ={git} target="_blank">
   <Button id ='github'variant="dark">Github</Button>
    </a>
    <a href = {demo} target="_blank">
    <Button className="demo" id='demo' variant="danger">
      Demo
    </Button>
    </a>
    </Card.Body>


    </div>
  </Card>

)
}
  
export default Card2;
