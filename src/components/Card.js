import React from 'react'
import './Card.css'
import {Button} from '@mui/material'


function Card({ src, title, description, price}) {
    return (
        <div className = 'card'>
            <img src={src} alt=''/>
            <div className='card_info'>
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
             
                <Button className = 'git' variant='outlined'>GITHUB </Button>
                <Button className = 'demo' variant='outlined'>Demo</Button>
            </div>

        </div>
    )
}

export default Card
