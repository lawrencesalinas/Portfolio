import React from 'react';
import { Card, Button } from 'react-bootstrap'
import './Card2.css'

function Card2({ src, title, description, tech, git, demo }) {
  return (   

  <div className="card">
    
    <Card className = 'card mb-3'>
    <Card.Img src={src}/>
    <Card.Body className = 'card_info'>
    <Card.Title>
    <h3>{title}</h3>
    </Card.Title>
    <Card.Text>
    <p>{description}</p>
    </Card.Text> 
    <a href ={git} target="_blank">
   <Button variant="dark">Github</Button>
    </a>
    <a href = {demo} target="_blank">
    <Button className="demo"  variant="danger">
      Demo
    </Button>
    </a>
    </Card.Body>



  </Card>
</div>
)
}
  
export default Card2;
