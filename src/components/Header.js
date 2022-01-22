import React from "react";
import "./Header.css";
import { Container, Row, Col } from "react-bootstrap";
const Header = () => {
  return (

   <Row>
     <Col lg={12} md={12}>
   <div className="header fixed-top">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav me-auto">
    
        <li class="nav-item">
          <a class="nav-link" href="#home">Home</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Contact">Contact</a>
        </li>

      </ul>
  
    </div>

</nav>
</div>
</Col >
</Row>


  )
};

export default Header;
