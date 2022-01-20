import { Button } from "@mui/material"
import React from "react"
import './Home.css'


const HomePage = () =>{
    return(
        <div className="home">
            <div className="home_info">
        <h2>Hello, I'm Lawrence</h2>
        <p>I'm a web developer/software engineer driven to find opportunities to grow<br/> and innovate solutions for the end-user.</p>
        <Button>CHECK OUT MY GITHUB</Button>
        </div>
        </div>

    )
}

export default HomePage
