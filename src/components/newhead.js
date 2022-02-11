import React from "react";
import "./Header.css";
import { Row, Col } from "react-bootstrap";
const Header = () => {
  return (

   <Row>
     <Col lg={12} md={12}>
  
   <div className="header fixed-top">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#footer">Contact</a>
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
