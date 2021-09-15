import React from "react";
import logo from "../logo.png"

/*@fontAwesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; 


const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
    <div className="container">
        <a className="navbar-brand" href="#"><img className ="myLogo" src={ logo} alt="logo...."/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About Me</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Skills</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Projects</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Resume</a>
            </li>
          
        </ul>
        
      </div>
    </div>
  </nav>
    );
}

export default NavigationBar
