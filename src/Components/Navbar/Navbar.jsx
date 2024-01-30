import React from "react";
import './Navbar.css'
const Navbar=()=>{
    return(
      <div className="navbar-wrapper">
        <div className="nav-left">
            <div className="nav-name">Shoaib</div>
            <span>toggle</span>
        </div>
        <div className="nav-right">
            <div className="nav-list">
                <ul style={{listStyleType:'none'}}>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experience</li>
                    <li>Portfolio</li>
                    <li>Testimonials</li>
                </ul>
            </div>
            <button className="button n-button">
                Contact us
            </button>
        </div>
      </div>
    )
}

export default Navbar;