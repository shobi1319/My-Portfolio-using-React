import React from "react";
import './Navbar.css'
import Toggle from "../Toggle/Toggle";
const Navbar=()=>{
    return(
      <div className="navbar-wrapper"  id="#home">
        <div className="nav-left">
            <div className="nav-name" >Shoaib</div>
            <Toggle />
        </div>
        <div className="nav-right">
        <div className="nav-list">
    <ul style={{listStyleType:'none'}}>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimon">Testimonials</a></li>
    </ul>
</div>

            <a href="#contact">
            <button className="button n-button">
                Contact us
            </button>
            </a>
        </div>
      </div>
    )
}

export default Navbar;